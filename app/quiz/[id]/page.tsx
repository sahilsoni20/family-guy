import { Container } from "@/components/Container";
import { Answer } from "@/components/Answer";
import { endpoint } from "@/utils/endpoint";

async function getQuizQuestion(id: string) {
  console.log('Fetching question for ID:', id);
  const data = await fetch(`${endpoint}/quiz/${id}`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  console.log('Params:', params); // Check params here

  const { question } = await getQuizQuestion(params.id);

  return (
    <Container as="main" className="px-5 w-full max-w-screen-md m-auto flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{question.title}</h1>
      <Answer answers={question.answers} questionId={params.id} />
    </Container>
  );
}
