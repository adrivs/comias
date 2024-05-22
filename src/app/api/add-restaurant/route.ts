import { sql } from '@vercel/postgres';
import { format, parseISO } from 'date-fns';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const restaurant = searchParams.get('restaurant');
    const date = searchParams.get('date');

    try {
        if (!restaurant || !date) throw new Error('Restaurant and date are required');
        const parsedDate = parseISO(date);
        const formattedDate = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');

        await sql`INSERT INTO restaurants (id, name, date) VALUES (uuid_generate_v4(), ${restaurant}, ${formattedDate}::TIMESTAMP);`;
        return NextResponse.json({ message: "Restaurante correctamente añadido" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}