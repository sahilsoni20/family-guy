

import { endpoint } from "@/utils/endpoint";

export async function getAllCharacters() {
  const response = await fetch(`${endpoint}/characters`);

  if (!response) {
    throw new Error("Failed to fetch the data from endpoint");
  }
  return response.json();
}


export async function getCharacterBySlug(slug:string) {
  const data = await fetch(`${endpoint}/characters/${slug}`)

  if(!data.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return data.json()

}