import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import myconnection from "@/app/utils/dbconnection";

export default async function handler(req, res) {
    return res.json({ data: "sdg" }, { status: 202 });
}