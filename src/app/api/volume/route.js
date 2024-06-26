import myconnection from "@/app/utils/dbconnection";
import { Message } from "@mui/icons-material";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    try {
        const [results, fields] = await myconnection.query(
            'SELECT * FROM `volume`'
        );
        return NextResponse.json({ data: results }, { status: 202 });
    } catch (err) {
        return NextResponse.json({ success: false, 'Message': err }, { status: 500 });
    }
}
export async function POST(req, res) {
    // const { title } = req.body;
    const { title } = await req.json(); // fields contains extra meta data about results, if available
    console.log(title);
    try {
        const [results, fields] = await myconnection.query(
            "INSERT INTO `volume`(`title`) VALUES ('" + title + "')"
        );
        return NextResponse.json({ data: { "id": results.insertId, "title": title } }, { status: 202 });
    } catch (err) {
        console.log(err);
    }
}
export async function DELETE(req, res) {
    // const { title } = req.body;
    let id = req.nextUrl.searchParams.get('volume-id');
    const [results, fields] = await myconnection.query(
        "DELETE FROM volume WHERE `volume`.`id` =" + id
    );

    console.log(results);
    return NextResponse.json({ data: results }, { status: 200 });
}