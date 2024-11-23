import { NextResponse } from 'next/server'

const API_URL = 'https://localhost:5001/api/books'

export async function GET() {
    const response = await fetch(API_URL)
    const data = await response.json()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    const body = await request.json()
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data, { status: 201 })
}

