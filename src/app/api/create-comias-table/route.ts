import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {

    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await sql`
      CREATE TABLE IF NOT EXISTS restaurants (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS coordinates (
        id SERIAL PRIMARY KEY,
        place_id VARCHAR(255) REFERENCES restaurants(id) ON DELETE CASCADE,
        latitude DECIMAL(10, 8) NOT NULL,
        longitude DECIMAL(11, 8) NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS scores (
        id SERIAL PRIMARY KEY,
        place_id VARCHAR(255) REFERENCES restaurants(id) ON DELETE CASCADE,
        person VARCHAR(255) NOT NULL,
        score DECIMAL(4, 2) NOT NULL
      );
    `;

    return NextResponse.json({ message: 'Tables created successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
