

import { endpoint } from "@/utils/endpoint";

export async function getAllCharacters() {
  const response = await fetch(`${endpoint}\characters`);

  if (!response) {
    throw new Error("Failed to fetch the data from endpoint");
  }
  return response.json();
}
