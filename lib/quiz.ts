import { endpoint } from "@/utils/endpoint";

//we are using no-store, by which if user enters again in website the same question will not shown, as it will not store any of the cache
export async function getRadomQuizQuestion() {
  const data = await fetch(`${endpoint}/quiz/random`, { cache: "no-store" });

  if (!data.ok) {
    throw new Error("Failed to fetch the data");
  }

  return data.json();
}

export async function getQuizQuestion(id: string) {
  console.log('id:', id); // Log the id to debug
  const data = await fetch(`${endpoint}/quiz/${id}`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}
