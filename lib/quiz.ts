import { endpoint } from "@/utils/endpoint";

//we are using no-store, by which if user enters again in website the same question will not shown, as it will not store any of the cache 
export async function getRadomQuizQuestion() {
    const data = await fetch(`${endpoint}/quiz/random`, {cache: 'no-store'})

    if(!data.ok) {
        throw new Error('Failed to fetch the data')
    }

    return data.json()
}
