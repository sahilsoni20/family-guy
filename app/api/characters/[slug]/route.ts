import { NextResponse } from "next/server"
import characters from '@/data/characters.json'
import quotes from '@/data/quotes.json'

export async function GET({ params }: { params: { slug: string } }) {
    try {
        const character = characters.data.find(item => item.slug === params.slug)
        if(!character) {
            return new NextResponse('not found', {status: 400})
        }

        const characterQuotes = quotes.data.filter(item => item.character_id === character.id)

        return NextResponse.json({
            character,
            characterQuotes: characterQuotes.length > 0 ? characterQuotes : null
        })

    } catch (error) {
        return new NextResponse('Internal Server Error', {status:500})
    }
}