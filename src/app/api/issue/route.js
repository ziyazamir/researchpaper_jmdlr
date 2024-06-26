import myconnection from "@/app/utils/dbconnection";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    try {
        const [results, fields] = await myconnection.query(
            'SELECT issue.id,issue.title as issueTitle, volume.title, issue.date, volume.id as volumeId FROM issue INNER JOIN volume ON issue.volume_id=volume.id;'
        );
        return NextResponse.json({ data: results }, { status: 202 });
    } catch (err) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
export async function POST(req, res) {
    // const { title } = req.body;
    const { title, volume_id } = await req.json(); // fields contains extra meta data about results, if available
    // console.log(title);
    try {
        const [results, fields] = await myconnection.query(
            "INSERT INTO `issue`(`title`,`volume_id`) VALUES ('" + title + "'," + volume_id + ")"
        );

        const [results2, fields2] = await myconnection.query(
            'SELECT issue.id,issue.title as issueTitle, volume.title, issue.date FROM issue INNER JOIN volume ON issue.volume_id=volume.id  WHERE `issue`.`id` =' + results.insertId
        );

        return NextResponse.json({ data: results2 }, { status: 202 });

    } catch (err) {
        console.log(err);
    }
}
export async function DELETE(req, res) {
    // const { title } = req.body;
    let id = req.nextUrl.searchParams.get('issue-id');
    const [results, fields] = await myconnection.query(
        "DELETE FROM issue WHERE `issue`.`id` =" + id
    );


    // console.log(results);
    return NextResponse.json({ data: results }, { status: 200 });
}