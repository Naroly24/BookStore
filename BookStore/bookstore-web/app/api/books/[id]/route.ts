import { NextResponse } from 'next/server'

const API_URL = 'https://localhost:5001/api/books'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const response = await fetch(`${API_URL}/${id}`)
    const data = await response.json()
    return NextResponse.json(data)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const body = await request.json()
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    return NextResponse.json({ success: true })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    return new NextResponse(null, { status: 204 })
}

