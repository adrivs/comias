import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const selectedRestaurant = searchParams.get('selected');

    try {
        const restaurant = await sql`SELECT * from restaurants WHERE id = ${selectedRestaurant};`;
        return NextResponse.json({ restaurant: restaurant.rows[0] }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}