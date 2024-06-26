import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import myconnection from "@/app/utils/dbconnection";
function generateRandom10DigitNumber() {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();

    // Scale it to a 10-digit number range
    const random10DigitNumber = Math.floor(1000000000 + randomNum * 9000000000);

    return random10DigitNumber;
}

export const GET = async (req, res) => {
    try {
        const [results, fields] = await myconnection.query(
            'SELECT paper.id,paper.author,paper.doi,paper.title AS paper_title,paper.abstact,paper.createdAt,issue.title AS issue_title,volume.title AS volume_title FROM paper INNER JOIN issue ON paper.issue_id = issue.id INNER JOIN volume ON paper.volume = volume.id');

        return NextResponse.json({ data: results }, { status: 202 });
    } catch (err) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
export const POST = async (req, res) => {
    const formData = await req.formData();

    const filename = formData.get("filename");
    // const myformData = new FormData();
    // myformData.append("file", file);

    // const requestOptions = {
    //     method: "POST",
    //     body: myformData,
    // };

    // const response = await fetch("https://nitisara.in/api/upload.php", requestOptions);
    // const result = await response.json(); // Assuming the response from your PHP script is in JSON

    const title = formData.get("title");
    const author = formData.get("author");
    const doi = formData.get("doi");
    const volume = formData.get("volume");
    const issue = formData.get("issue");
    const abstract = formData.get("abs");
    // const abstract = formData.get("file");
    // if (!file) {
    //     return NextResponse.json({ error: "No files received." }, { status: 400 });
    // }

    // const buffer = Buffer.from(await file.arrayBuffer());
    // const filename = generateRandom10DigitNumber() + file.name.replaceAll(" ", "_");
    // console.log(filename);
    try {
        // await writeFile(
        //     path.join(process.cwd(), "public/pdfs/" + filename),
        //     buffer
        // );
        const query = "INSERT INTO `paper`(`title`,`author`,`doi`, `volume`, `issue_id`, `file`, `abstact`) VALUES (?,?,?,?,?,?,?)";
        const values = [title, author, doi, volume, issue, filename, abstract];
        let results = myconnection.execute(query, values, (err, results) => {
            if (err) throw err;
            console.log('Data inserted:', results);
            myconnection.end();
            return results;
        });
        return NextResponse.json({ success: true, Message: results, status: 201 });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ success: false, Message: error, status: 500 });
    }
};
export async function DELETE(req, res) {
    // const { title } = req.body;
    let id = req.nextUrl.searchParams.get('paper-id');
    const [results, fields] = await myconnection.query(
        "DELETE FROM paper WHERE `paper`.`id` =" + id
    );

    console.log(results);
    return NextResponse.json({ data: results }, { status: 200 });
}