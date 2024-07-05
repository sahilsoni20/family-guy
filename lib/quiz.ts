import { endpoint } from "@/utils/endpoint";

export async function getRadomQuizQuestion() {
    const data = await fetch(`${endpoint}/quiz/random`, {cache: 'no-store'})

    if(!data.ok) {
        throw new Error('Failed to fetch the data')
    }

    return data.json()
}
