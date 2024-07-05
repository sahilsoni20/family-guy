//we are using route.ts that means its an API route 

import { NextResponse } from 'next/server'
import characters from '@/data/characters.json'

//Get is for retriving the data from server 
export async function GET(request: Request) {
    return NextResponse.json({characters: characters.data})
}