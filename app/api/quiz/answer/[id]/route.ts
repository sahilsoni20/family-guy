import { NextResponse } from "next/server";
import questions from "@/data/quiz.json";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const question = questions.data.find((item) => item.id === params.id);

    if (!question) {
      return new NextResponse("Error while fetching data", { status: 404 });
    }

    const { correct_answer } = question;

    const filteredQuestions = questions.data.filter(
      (item) => item.id !== params.id
    );

    const random = Math.floor(Math.random() * filteredQuestions.length);

    return NextResponse.json({
      correct: correct_answer,
      random: filteredQuestions[random].id,
    });
  } catch (error) {
    return new NextResponse("Internal server error (answer[id])", {
      status: 500,
    });
  }
}

//by this route we will be able to retrive specific question,
//the code will search by comparing given ID with ID of question
