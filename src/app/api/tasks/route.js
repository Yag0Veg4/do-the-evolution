/*import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/db'
import Artist from '@/models/Task'

export async function GET() {
    connectDB()
    const artists = await Artist.find()
    return NextResponse.json(artists)
}

export async function POST(request) {
    const data = await request.json()
    const newArtistData = new Artist(data)
    console.log(newArtistData)

    return NextResponse.json({
        message: 'creando tarea...'
    })
}*/