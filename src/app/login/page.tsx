"use client"; import { redirect } from "next/navigation"; export default function Redirect() { redirect("/auth/login"); return null; }
