
import myconnection from "@/app/utils/dbconnection";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req, res) {
    try {
        const [results, fields] = await myconnection.query(
            `SELECT v.id, v.title, CONCAT('[', GROUP_CONCAT(CONCAT('{ "id": ', i.id, ', "title": "', i.title, '" }')), ']') AS issues FROM volume v LEFT JOIN issue i ON v.id = i.volume_id GROUP BY v.id, v.title`);
        return NextResponse.json({ data: results }, { status: 202 });
    } catch (err) {
        return NextResponse.json({ success: err }, { status: 500 });
    }
}