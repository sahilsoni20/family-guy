import { NextResponse } from "next/server";
import questions from "@/data/quiz.json";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const question = questions.data.find((item) => item.id === params.id);

    if (!question) {
      return new NextResponse("not found", { status: 404 });
    }

    const { correct_answer, ...rest } = question;

    return NextResponse.json({
      question: rest,
    });
  } catch (error) {
    return new NextResponse("Internal Server error (quiz [id])", {
      status: 500,
    });
  }
}
