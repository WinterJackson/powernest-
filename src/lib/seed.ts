/**
 * POWERNEST E-COMMERCE - COMPREHENSIVE SEED DATA
 *
 * This file contains all seed data for the database.
 * Run with: npx prisma db seed
 */

import { AuditAction, OrderStatus, PaymentStatus, PrismaClient, ProductStatus, ReturnStatus, RiskLevel, StockStatus, TicketPriority, TicketStatus, UserRole, UserStatus } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

// ============================================
// DATA GENERATORS & CONSTANTS
// ============================================

const NAIROBI_LOCATIONS = ['Westlands', 'Kilimani', 'Karen', 'Lavington', 'South B', 'South C', 'Langata', 'Runda', 'Kileleshwa', 'Parklands', 'Eastleigh', 'Buruburu', 'Donholm', 'Ngong Road', 'Thika Road']
const KENYA_CITIES = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale', 'Garissa', 'Nyeri']

function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

async function main() {
    console.log('🌱 Starting database seed...')

    // 1. CLEANUP
    const tablenames = await prisma.$queryRaw<Array<{ tablename: string }>>`SELECT tablename FROM pg_tables WHERE schemaname='public'`
    const tables = tablenames
        .map(({ tablename }) => tablename)
        .filter((name) => name !== '_prisma_migrations')
        .map((name) => `"public"."${name}"`)
        .join(', ')

    try {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`)
    } catch (error) {
        console.log({ error })
    }
    console.log('✅ Cleared existing data')

    // 2. USERS (25 Users: 2 Admin, 3 Support, 20 Clients)
    const passwordHash = await hash('Password123!', 12)
    const usersData = [
        // STAFF
        { id: 'u_admin_01', email: 'admin@powernest.co.ke', firstName: 'System', lastName: 'Admin', role: UserRole.ADMIN },
        { id: 'u_admin_02', email: 'manager@powernest.co.ke', firstName: 'Operations', lastName: 'Manager', role: UserRole.ADMIN },
        { id: 'u_supp_01', email: 'mike.tech@powernest.co.ke', firstName: 'Michael', lastName: 'Ochieng', role: UserRole.SUPPORT_STAFF },
        { id: 'u_supp_02', email: 'sarah.support@powernest.co.ke', firstName: 'Sarah', lastName: 'Wanjiku', role: UserRole.SUPPORT_STAFF },
        { id: 'u_supp_03', email: 'david.install@powernest.co.ke', firstName: 'David', lastName: 'Kamau', role: UserRole.SUPPORT_STAFF },
        // CLIENTS
        { id: 'u_cl_01', email: 'alice.johnson@gmail.com', firstName: 'Alice', lastName: 'Johnson', phone: '+254712345678' },
        { id: 'u_cl_02', email: 'robert.brown@outlook.com', firstName: 'Robert', lastName: 'Brown', phone: '+254722111222' },
        { id: 'u_cl_03', email: 'john.doe@gmail.com', firstName: 'John', lastName: 'Doe', phone: '+254700999888' },
        { id: 'u_cl_04', email: 'jane.smith@yahoo.com', firstName: 'Jane', lastName: 'Smith', phone: '+254733444555' },
        { id: 'u_cl_05', email: 'edward.mwangi@gmail.com', firstName: 'Edward', lastName: 'Mwangi', phone: '+254744555666' },
        { id: 'u_cl_06', email: 'linda.kemunto@hotmail.com', firstName: 'Linda', lastName: 'Kemunto', phone: '+254755666777' },
        { id: 'u_cl_07', email: 'kevin.otieno@gmail.com', firstName: 'Kevin', lastName: 'Otieno', phone: '+254766777888' },
        { id: 'u_cl_08', email: 'grace.njeri@gmail.com', firstName: 'Grace', lastName: 'Njeri', phone: '+254777888999' },
        { id: 'u_cl_09', email: 'samuel.kibet@gmail.com', firstName: 'Samuel', lastName: 'Kibet', phone: '+254788999000' },
        { id: 'u_cl_10', email: 'fatuma.mohamed@gmail.com', firstName: 'Fatuma', lastName: 'Mohamed', phone: '+254799000111' },
        { id: 'u_cl_11', email: 'peter.maina@yahoo.com', firstName: 'Peter', lastName: 'Maina', phone: '+254711222001' },
        { id: 'u_cl_12', email: 'esther.wangui@aol.com', firstName: 'Esther', lastName: 'Wangui', phone: '+254722333002' },
        { id: 'u_cl_13', email: 'james.omondi@gmail.com', firstName: 'James', lastName: 'Omondi', phone: '+254733444003' },
        { id: 'u_cl_14', email: 'lucy.akoth@gmail.com', firstName: 'Lucy', lastName: 'Akoth', phone: '+254744555004' },
        { id: 'u_cl_15', email: 'brian.kipkorir@outlook.com', firstName: 'Brian', lastName: 'Kipkorir', phone: '+254755666005' },
        { id: 'u_cl_16', email: 'mary.muthoni@gmail.com', firstName: 'Mary', lastName: 'Muthoni', phone: '+254766777006' },
        { id: 'u_cl_17', email: 'george.odhiambo@gmail.com', firstName: 'George', lastName: 'Odhiambo', phone: '+254777888007' },
        { id: 'u_cl_18', email: 'ann.wanja@gmail.com', firstName: 'Ann', lastName: 'Wanja', phone: '+254788999008' },
        { id: 'u_cl_19', email: 'paul.kimani@hotmail.com', firstName: 'Paul', lastName: 'Kimani', phone: '+254799000009' },
        { id: 'u_cl_20', email: 'susan.anyango@gmail.com', firstName: 'Susan', lastName: 'Anyango', phone: '+254700111010' },
    ]

    for (const u of usersData) {
        await prisma.user.create({
            data: {
                id: u.id,
                email: u.email,
                passwordHash,
                firstName: u.firstName,
                lastName: u.lastName,
                phone: u.phone,
                role: u.role || UserRole.CLIENT,
                status: UserStatus.ACTIVE,
                emailVerified: true,
                twoFactorEnabled: u.role === UserRole.ADMIN, // Enforce 2FA for admins
            }
        })
    }
    console.log(`✅ Created ${usersData.length} users`)

    // 3. ADDRESSES (30+ Addresses)
    const addresses = []
    const clientIds = usersData.filter(u => !u.role || (u.role as any) === UserRole.CLIENT).map(u => u.id)
    let addrCounter = 1

    for (const clientId of clientIds) {
        // Home Address
        addresses.push({
            id: `addr-${addrCounter++}`,
            userId: clientId,
            label: 'Home',
            addressLine1: `House ${Math.floor(Math.random() * 100) + 1}, ${NAIROBI_LOCATIONS[Math.floor(Math.random() * NAIROBI_LOCATIONS.length)]}`,
            city: 'Nairobi',
            postalCode: '00100',
            isDefault: true
        })
        // Occasional Office/Business Address
        if (Math.random() > 0.5) {
            addresses.push({
                id: `addr-${addrCounter++}`,
                userId: clientId,
                label: 'Office',
                addressLine1: `Office ${Math.floor(Math.random() * 20) + 1}, Business Park`,
                city: KENYA_CITIES[Math.floor(Math.random() * KENYA_CITIES.length)],
                postalCode: '00200',
                isDefault: false
            })
        }
    }
    await prisma.address.createMany({ data: addresses })
    console.log(`✅ Created ${addresses.length} addresses`)

    // 4. CATEGORIES (12 Categories)
    const categoriesData = [
        { name: 'Solar Panels', slug: 'solar-panels', icon: 'Sun' },
        { name: 'Inverters', slug: 'inverters', icon: 'Zap' },
        { name: 'Batteries', slug: 'batteries', icon: 'Battery' },
        { name: 'Charge Controllers', slug: 'charge-controllers', icon: 'Cpu' },
        { name: 'Solar Water Heating', slug: 'solar-water-heating', icon: 'Droplets' },
        { name: 'Solar Water Pumps', slug: 'solar-water-pumps', icon: 'Waves' },
        { name: 'Lighting', slug: 'lighting', icon: 'Lightbulb' },
        { name: 'Smart Switches', slug: 'smart-switches', icon: 'ToggleLeft' },
        { name: 'Generators', slug: 'generators', icon: 'Flame' },
        { name: 'Cables & Wiring', slug: 'cables-wiring', icon: 'Activity' },
        { name: 'Mounting Systems', slug: 'mounting', icon: 'Hammer' },
        { name: 'Protection Devices', slug: 'protection', icon: 'Shield' },
    ]
    await prisma.category.createMany({ data: categoriesData })
    console.log(`✅ Created ${categoriesData.length} categories`)

    // 5. BRANDS (12 Brands)
    const brandsData = [
        { name: 'PowerNest', slug: 'powernest', isFeatured: true },
        { name: 'Jinko Solar', slug: 'jinko', isFeatured: true },
        { name: 'Canadian Solar', slug: 'canadian-solar', isFeatured: true },
        { name: 'Trina Solar', slug: 'trina', isFeatured: false },
        { name: 'Huawei', slug: 'huawei', isFeatured: true },
        { name: 'Sungrow', slug: 'sungrow', isFeatured: false },
        { name: 'Victron Energy', slug: 'victron', isFeatured: true },
        { name: 'SMA', slug: 'sma', isFeatured: true },
        { name: 'Schneider', slug: 'schneider', isFeatured: false },
        { name: 'Luminous', slug: 'luminous', isFeatured: true },
        { name: 'Tubular', slug: 'tubular', isFeatured: false },
        { name: 'Growatt', slug: 'growatt', isFeatured: true },
    ]
    await prisma.brand.createMany({ data: brandsData })
    console.log(`✅ Created ${brandsData.length} brands`)

    // Fetch IDs for relations
    const cats = await prisma.category.findMany()
    const brs = await prisma.brand.findMany()
    const getCatId = (slug: string) => cats.find(c => c.slug === slug)?.id || cats[0].id
    const getBrandId = (slug: string) => brs.find(b => b.slug === slug)?.id || brs[0].id

    // 6. PRODUCTS (50 Products)
    const productsData = [
        // PANELS
        { sku: 'PN-001', name: 'Jinko Tiger Neo 475W Mono', price: 18500, cat: 'solar-panels', brand: 'jinko' },
        { sku: 'PN-002', name: 'Jinko Tiger Neo 585W Mono', price: 22000, cat: 'solar-panels', brand: 'jinko' },
        { sku: 'PN-003', name: 'Canadian Solar 450W HiKu', price: 17500, cat: 'solar-panels', brand: 'canadian-solar' },
        { sku: 'PN-004', name: 'Canadian Solar 550W HiKu', price: 21000, cat: 'solar-panels', brand: 'canadian-solar' },
        { sku: 'PN-005', name: 'Trina Vertex S 425W', price: 16000, cat: 'solar-panels', brand: 'trina' },
        { sku: 'PN-006', name: 'Longi Hi-MO 6 450W', price: 18200, cat: 'solar-panels', brand: 'trina' }, // Using Trina as placeholder for Longi if missing

        // INVERTERS
        { sku: 'INV-001', name: 'Huawei SUN2000 5KTL Hybrid', price: 185000, cat: 'inverters', brand: 'huawei' },
        { sku: 'INV-002', name: 'Huawei SUN2000 10KTL', price: 280000, cat: 'inverters', brand: 'huawei' },
        { sku: 'INV-003', name: 'Victron MultiPlus-II 48/5000', price: 220000, cat: 'inverters', brand: 'victron' },
        { sku: 'INV-004', name: 'Victron Quattro 48/10000', price: 450000, cat: 'inverters', brand: 'victron' },
        { sku: 'INV-005', name: 'Growatt 5kW Off-Grid', price: 75000, cat: 'inverters', brand: 'growatt' },
        { sku: 'INV-006', name: 'Growatt 10kW Hybrid', price: 210000, cat: 'inverters', brand: 'growatt' },
        { sku: 'INV-007', name: 'SMA Sunny Boy 5.0', price: 195000, cat: 'inverters', brand: 'sma' },

        // BATTERIES
        { sku: 'BAT-001', name: 'Huawei LUNA2000 5kWh', price: 350000, cat: 'batteries', brand: 'huawei' },
        { sku: 'BAT-002', name: 'Pylontech US3000C 3.5kWh', price: 165000, cat: 'batteries', brand: 'victron' }, // Pylontech often paired with Victron
        { sku: 'BAT-003', name: 'Luminous Solar Battery 200Ah', price: 38000, cat: 'batteries', brand: 'luminous' },
        { sku: 'BAT-004', name: 'Tubular Gel Battery 150Ah', price: 28000, cat: 'batteries', brand: 'tubular' },
        { sku: 'BAT-005', name: 'PowerNest Wall 10kWh', price: 450000, cat: 'batteries', brand: 'powernest' },

        // PUMPS
        { sku: 'PMP-001', name: 'Grundfos SQFlex 2.5-2', price: 120000, cat: 'solar-water-pumps', brand: 'schneider' }, // Placeholder brand
        { sku: 'PMP-002', name: 'SunFlow Surface Pump 1HP', price: 45000, cat: 'solar-water-pumps', brand: 'powernest' },

        // WATER HEATING
        { sku: 'SWH-001', name: 'Seven stars 200L Pressurized', price: 85000, cat: 'solar-water-heating', brand: 'powernest' },
        { sku: 'SWH-002', name: 'Seven stars 300L Flat Plate', price: 120000, cat: 'solar-water-heating', brand: 'powernest' },

        // ACCESSORIES
        { sku: 'ACC-001', name: 'Solar Cable 4mm² Black (100m)', price: 7500, cat: 'cables-wiring', brand: 'powernest' },
        { sku: 'ACC-002', name: 'Solar Cable 6mm² Red (100m)', price: 9500, cat: 'cables-wiring', brand: 'powernest' },
        { sku: 'ACC-003', name: 'MC4 Connectors (Pair)', price: 250, cat: 'cables-wiring', brand: 'powernest' },
        { sku: 'ACC-004', name: 'Mounting Rails 2.4m', price: 2200, cat: 'mounting', brand: 'powernest' },
        { sku: 'ACC-005', name: 'Mid Clamps (10pcs)', price: 1500, cat: 'mounting', brand: 'powernest' },
        { sku: 'ACC-006', name: 'End Clamps (10pcs)', price: 1500, cat: 'mounting', brand: 'powernest' },
        { sku: 'ACC-007', name: 'DC Breaker 63A', price: 1200, cat: 'protection', brand: 'schneider' },
        { sku: 'ACC-008', name: 'Surge Protector Device', price: 3500, cat: 'protection', brand: 'schneider' },

        // LIGHTING
        { sku: 'LGT-001', name: 'All-in-One Solar Street Light 60W', price: 12500, cat: 'lighting', brand: 'powernest' },
        { sku: 'LGT-002', name: 'All-in-One Solar Street Light 100W', price: 16500, cat: 'lighting', brand: 'powernest' },
        { sku: 'LGT-003', name: 'Solar Flood Light 200W', price: 8500, cat: 'lighting', brand: 'powernest' },
        { sku: 'LGT-004', name: 'Indoor LED Tube 18W', price: 450, cat: 'lighting', brand: 'tronic' },
        { sku: 'LGT-005', name: 'LED Bulb 9W Pin', price: 250, cat: 'lighting', brand: 'tronic' },

        // SMART HOME
        { sku: 'SMT-001', name: 'WiFi Smart Switch 1-Gang', price: 2200, cat: 'smart-switches', brand: 'tronic' },
        { sku: 'SMT-002', name: 'WiFi Smart Switch 2-Gang', price: 2500, cat: 'smart-switches', brand: 'tronic' },
        { sku: 'SMT-003', name: 'WiFi Smart Switch 3-Gang', price: 3200, cat: 'smart-switches', brand: 'tronic' },
        { sku: 'SMT-004', name: 'Smart Plug 16A', price: 1800, cat: 'smart-switches', brand: 'tronic' },

        // GENERATORS
        { sku: 'GEN-001', name: 'Petrol Generator 3.5kVA', price: 45000, cat: 'generators', brand: 'powernest' },
        { sku: 'GEN-002', name: 'Silent Diesel Generator 10kVA', price: 450000, cat: 'generators', brand: 'powernest' },
        { sku: 'GEN-003', name: 'Manual Transfer Switch 63A', price: 4500, cat: 'protection', brand: 'schneider' },

        // FILLERS
        { sku: 'PN-007', name: 'Jinko 330W Poly (Clearance)', price: 12000, cat: 'solar-panels', brand: 'jinko' },
        { sku: 'INV-008', name: 'Luminous 1.5kVA Inverter', price: 22000, cat: 'inverters', brand: 'luminous' },
        { sku: 'BAT-006', name: 'Luminous 150Ah Battery', price: 32000, cat: 'batteries', brand: 'luminous' },
    ]

    for (const p of productsData) {
        await prisma.product.create({
            data: {
                sku: p.sku,
                name: p.name,
                slug: p.name.toLowerCase().replace(/ /g, '-').replace(/[()]/g, ''),
                description: `High quality ${p.name} for your energy needs.`,
                price: p.price,
                compareAtPrice: Math.floor(p.price * 1.1),
                categoryId: getCatId(p.cat),
                brandId: getBrandId(p.brand),
                stockQuantity: Math.floor(Math.random() * 200),
                status: ProductStatus.ACTIVE,
                isNew: Math.random() > 0.8,
                isFeatured: Math.random() > 0.8,
            }
        })
    }
    console.log(`✅ Created ${productsData.length} products`)

    // 7. PRODUCT IMAGES, FEATURES, SPECS, INVENTORY (Mass gen)
    const allProducts = await prisma.product.findMany()
    const imageBase = 'https://images.unsplash.com/photo-1549419137-4d1010043834?q=80&w=2070'

    for (const prod of allProducts) {
        // Inventory
        await prisma.inventory.create({
            data: {
                productId: prod.id,
                location: Math.random() > 0.5 ? 'Warehouse A' : 'Warehouse B',
                stockQuantity: prod.stockQuantity,
                status: prod.stockQuantity > 10 ? StockStatus.IN_STOCK : StockStatus.LOW_STOCK
            }
        })

        // Images (2 per product)
        await prisma.productImage.createMany({
            data: [
                { productId: prod.id, imageUrl: imageBase, isPrimary: true, displayOrder: 0 },
                { productId: prod.id, imageUrl: imageBase, isPrimary: false, displayOrder: 1 }
            ]
        })

        // Features (3 per product)
        await prisma.productFeature.createMany({
            data: [
                { productId: prod.id, featureText: 'High efficiency rating', displayOrder: 0 },
                { productId: prod.id, featureText: 'Durable construction', displayOrder: 1 },
                { productId: prod.id, featureText: 'Easy installation', displayOrder: 2 },
            ]
        })

        // Specs (2 per product)
        await prisma.productSpecification.createMany({
            data: [
                { productId: prod.id, specLabel: 'Warranty', specValue: '5 Years', displayOrder: 0 },
                { productId: prod.id, specLabel: 'Origin', specValue: 'Imported', displayOrder: 1 },
            ]
        })
    }
    console.log(`✅ Created aux data for products`)

    // 8. ORDERS (40 Orders)
    const orders = []
    const orderItems = []
    const payments = []
    const returns = []

    for (let i = 0; i < 40; i++) {
        const user = usersData[Math.floor(Math.random() * 20) + 5] // Select from clients
        const addrId = addresses.find(a => a.userId === user.id)?.id || addresses[0].id // Simplified lookup
        const orderId = `ord-${i + 100}`
        const status = Object.values(OrderStatus)[Math.floor(Math.random() * Object.values(OrderStatus).length)]

        const numItems = Math.floor(Math.random() * 5) + 1
        let total = 0

        // Create Items
        for (let j = 0; j < numItems; j++) {
            const prod = allProducts[Math.floor(Math.random() * allProducts.length)]
            const qty = Math.floor(Math.random() * 3) + 1
            const linePrice = Number(prod.price) * qty
            total += linePrice

            orderItems.push({
                orderId,
                productId: prod.id,
                productName: prod.name,
                quantity: qty,
                unitPrice: prod.price,
                totalPrice: linePrice
            })
        }

        const vat = total * 0.16
        const shipping = total > 50000 ? 0 : 500
        const grandTotal = total + vat + shipping

        orders.push({
            id: orderId,
            orderNumber: `ORD-${2025000 + i}`,
            userId: user.id,
            shippingAddressId: addrId,
            status,
            paymentStatus: Math.random() > 0.2 ? PaymentStatus.PAID : PaymentStatus.UNPAID,
            riskLevel: total > 200000 ? RiskLevel.HIGH : RiskLevel.LOW,
            subtotal: total,
            vatAmount: vat,
            shippingCost: shipping,
            totalAmount: grandTotal,
            trackingStep: status === 'DELIVERED' ? 4 : status === 'SHIPPED' ? 2 : 0,
            createdAt: randomDate(new Date(2025, 0, 1), new Date())
        })

        if (Math.random() > 0.2) {
            payments.push({
                orderId,
                paymentMethod: i % 2 === 0 ? 'M-Pesa' : 'Card',
                transactionId: `TRX-${Math.random().toString(36).substring(7).toUpperCase()}`,
                amount: grandTotal,
                status: PaymentStatus.PAID,
                paidAt: new Date()
            })
        }

        // Returns for some orders
        if (i % 3 === 0) {
            returns.push({
                returnNumber: `RET-${1000 + i}`,
                orderId,
                customerId: user.id,
                productId: orderItems[orderItems.length - 1].productId,
                reason: 'Defective',
                status: ReturnStatus.PENDING_REVIEW
            })
        }
    }

    // Batch create orders logic
    // We can't use createMany for Orders due to nested complexity often preferred, but createMany is supported for simple models.
    // However, OrderItems and Payments depend on Orders.
    // We will loop to create them to emulate realistic timing or strict relation enforcement.
    // Ideally createMany is faster.

    // NOTE: Prisma createMany doesn't support nested relations.
    console.log('Creating orders...')
    for (const o of orders) {
        await prisma.order.create({ data: o })
    }
    await prisma.orderItem.createMany({ data: orderItems })
    await prisma.payment.createMany({ data: payments })
    await prisma.return.createMany({ data: returns })
    console.log(`✅ Created ${orders.length} orders`)

    // 9. REVIEWS & TESTIMONIALS (30+ Reviews, 12 Testimonials)
    const reviews = []
    for (let i = 0; i < 35; i++) {
        const prod = allProducts[Math.floor(Math.random() * allProducts.length)]
        const user = usersData[Math.floor(Math.random() * 20) + 5]
        reviews.push({
            productId: prod.id,
            userId: user.id,
            rating: Math.floor(Math.random() * 2) + 4, // Mostly 4-5 stars
            reviewText: 'Great product, works as expected. Delivery was fast.',
            isVerified: true,
            isApproved: true
        })
    }
    await prisma.review.createMany({ data: reviews })

    const testimonials = [
        { customerName: 'John Doe', content: 'PowerNest saved my business with their backup solutions.', displayOrder: 1 },
        { customerName: 'Jane Smith', content: 'Excellent service and quality panels.', displayOrder: 2 },
        { customerName: 'Michael K.', content: 'The installation team was professional and neat.', displayOrder: 3 },
        { customerName: 'Sarah W.', content: 'Best prices in town for Victron equipment.', displayOrder: 4 },
        { customerName: 'David O.', content: 'Highly recommend their solar water heating systems.', displayOrder: 5 },
        { customerName: 'Esther M.', content: 'Fast delivery to Nakuru. Goods arrived intact.', displayOrder: 6 },
        { customerName: 'Brian K.', content: 'Their technical support is top notch.', displayOrder: 7 },
        { customerName: 'Lucy A.', content: 'I love my new smart home setup.', displayOrder: 8 },
        { customerName: 'Peter M.', content: 'Reduced my bill by 80%. ROI is less than 3 years.', displayOrder: 9 },
        { customerName: 'Grace N.', content: 'Genuine products. Warranty cards provided.', displayOrder: 10 },
        { customerName: 'Paul K.', content: 'Very knowledgeable staff.', displayOrder: 11 },
        { customerName: 'Susan A.', content: 'A trusted partner for our construction projects.', displayOrder: 12 },
    ]
    await prisma.testimonial.createMany({ data: testimonials })
    console.log(`✅ Created Reviews and Testimonials`)

    // 10. TICKETS (20+ Tickets)
    const tickets = []
    const messages = []
    for (let i = 0; i < 20; i++) {
        const ticketId = `tck-${i}`
        const user = usersData[Math.floor(Math.random() * 20) + 5]
        tickets.push({
            id: ticketId,
            ticketNumber: `TCK-${2025}-${100 + i}`,
            customerId: user.id,
            subject: 'Inquiry about product availability',
            status: TicketStatus.OPEN,
            priority: TicketPriority.MEDIUM
        })
        messages.push({
            ticketId,
            senderId: user.id,
            message: 'Hi, when will the 5kW inverter be back in stock?'
        })
        messages.push({
            ticketId,
            senderId: 'u_supp_01',
            message: 'Hello, we expect new stock next week.'
        })
    }
    await prisma.ticket.createMany({ data: tickets })
    await prisma.ticketMessage.createMany({ data: messages })

    // 11. CARTS & SESSIONS (15 Carts, 15 Sessions)
    // Carts
    for (let i = 0; i < 15; i++) {
        const user = usersData[Math.floor(Math.random() * 20) + 5]
        const cart = await prisma.cart.create({
            data: {
                userId: user.id,
                items: {
                    create: [
                        { productId: allProducts[0].id, quantity: 1, unitPrice: allProducts[0].price } // Simplified
                    ]
                }
            }
        })
    }

    // Sessions
    const sessions = []
    for (let i = 0; i < 15; i++) {
        const user = usersData[Math.floor(Math.random() * 20) + 5]
        sessions.push({
            userId: user.id,
            sessionToken: `sess-${Math.random().toString(36)}`,
            expiresAt: new Date(Date.now() + 86400000)
        })
    }
    await prisma.session.createMany({ data: sessions })

    // 12. AUDIT LOGS (20+ Logs)
    const logs = []
    for (let i = 0; i < 25; i++) {
        logs.push({
            userId: 'u_admin_01',
            action: AuditAction.LOGIN,
            entityType: 'User',
            entityId: 'u_admin_01',
            ipAddress: '192.168.1.1',
            createdAt: randomDate(new Date(2025, 0, 1), new Date())
        })
    }
    await prisma.auditLog.createMany({ data: logs })

    // 13. SETTINGS & PREFERENCES
    const settings = [
        { settingKey: 'store_name', settingValue: 'PowerNest', settingGroup: 'general' },
        { settingKey: 'support_email', settingValue: 'hello@powernest.co.ke', settingGroup: 'general' },
        { settingKey: 'phone_main', settingValue: '+254 700 123 456', settingGroup: 'general' },
        { settingKey: 'address_hq', settingValue: 'Westlands, Nairobi', settingGroup: 'general' },
        { settingKey: 'currency', settingValue: 'KES', settingGroup: 'regional' },
        { settingKey: 'vat_rate', settingValue: '16', settingGroup: 'regional' },
        { settingKey: 'shipping_flat', settingValue: '500', settingGroup: 'regional' },
        { settingKey: 'shipping_free_tier', settingValue: '50000', settingGroup: 'regional' },
        { settingKey: 'brand_primary', settingValue: '#74C044', settingGroup: 'branding' },
        { settingKey: 'logo_url', settingValue: '/logo.png', settingGroup: 'branding' },
        { settingKey: 'security_2fa', settingValue: 'true', settingGroup: 'security' },
        { settingKey: 'maintenance_mode', settingValue: 'false', settingGroup: 'system' },
    ]
    await prisma.systemSetting.createMany({ data: settings })

    const notifs = [
        { eventType: 'new_order', emailEnabled: true, smsEnabled: true },
        { eventType: 'order_shipped', emailEnabled: true, smsEnabled: false },
        { eventType: 'low_stock', emailEnabled: true, smsEnabled: true },
        { eventType: 'new_ticket', emailEnabled: true, smsEnabled: false },
        { eventType: 'ticket_reply', emailEnabled: true, smsEnabled: true },
        { eventType: 'new_user', emailEnabled: true, smsEnabled: false },
        { eventType: 'password_reset', emailEnabled: true, smsEnabled: false },
        { eventType: 'payment_failed', emailEnabled: true, smsEnabled: true },
        { eventType: 'refund_issued', emailEnabled: true, smsEnabled: false },
        { eventType: 'newsletter', emailEnabled: true, smsEnabled: false },
        { eventType: 'promo', emailEnabled: true, smsEnabled: false }, // 11th
        { eventType: 'security_alert', emailEnabled: true, smsEnabled: true }, // 12th
    ]
    await prisma.notificationPreference.createMany({ data: notifs })

    console.log('\n🎉 Massive seed completed successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
