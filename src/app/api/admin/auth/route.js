import myconnection from "@/app/utils/dbconnection";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
export const dynamic = "force-dynamic";

export async function POST(req, res) {

    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ success: false, message: "Invalid email and password" }, { status: 200 });
    }

    try {
        const [rows] = await myconnection.execute('SELECT * FROM auth  WHERE email = ?', [email]);

        if (rows.length === 0) {
            return NextResponse.json({ success: false, message: "Invalid email and password" }, { status: 200 });
            // return res.status(200).json({ message: 'Invalid email or password' });
        }

        const user = rows[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return NextResponse.json({ success: false, message: "Invalid email and password" }, { status: 200 });
        }

        return NextResponse.json({ success: true, message: "Login succesfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: error }, { status: 590 });
    }
}
const updateUserPassword = async (email, hashedPassword) => {


};
export async function PUT(req, res) {
    const { email, oldPassword, newPassword } = await req.json();

    if (!email || !oldPassword || !newPassword) {
        return NextResponse.json({ success: false, message: 'Email, old password, and new password are required' });
    }

    try {
        const [rows] = await myconnection.execute('SELECT * FROM auth WHERE email = ?', [email]);

        if (rows.length === 0) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        const user = rows[0];

        const match = await bcrypt.compare(oldPassword, user.password);

        if (!match) {
            return NextResponse.json({ success: false, message: 'Old password is incorrect' });
        }

        const saltRounds = 10;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

        const [result] = await myconnection.execute('UPDATE auth SET password = ? WHERE email = ?', [hashedNewPassword, email]);

        return NextResponse.json({ success: true, message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        NextResponse.json({ success: false, message: 'Internal server error' });
    }
}