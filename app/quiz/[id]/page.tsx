import { Container } from "@/components/Container";
import { getQuizQuestion } from "@/lib/quiz";
import { Answer } from "@/components/Answer";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {
  console.log('Received id:', params.id); // Log the id
  const { question } = await getQuizQuestion(params.id);

  return (
    <Container
      className="px-5 w-full max-w-screen-md m-auto flex flex-col gap-5 py-5"
      as="main"
    >
      <h1 className="text-lg font-semibold">{question.title}</h1>
      <Answer answers={question.answers} questionId={question.id} />
    </Container>
  );
}
