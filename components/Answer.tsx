"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import { FaCheck } from "react-icons/fa";
import { MdNearbyError } from "react-icons/md";
import Link from "next/link";
import { FiRepeat } from "react-icons/fi";

type AnswerProps = {
  answers?: string[];
  questionId?: number;
};

type Data = {
  correct: string;
  random: string;
};

export const Answer = ({ answers = [], questionId }: AnswerProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let subscribed = true;
    if (selected) {
      setLoading(true);
      fetch(`/api/quiz/answers/${questionId}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (subscribed) {
            setData(data);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    }

    return () => {
      console.log("cancelled!");
      subscribed = false;
    };
  }, [questionId, selected]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {answers.map((item) => {
          const isLoading = selected === item && loading;
          const isWrong = selected === item && data && data.correct !== selected;
          const isCorrect = data?.correct === item;

          return (
            <li key={item}>
              <button
                disabled={Boolean(data) || loading}
                onClick={() => setSelected(item)}
                className={cn(
                  "p-2 rounded-md items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all",
                  isLoading && "animate-pulse",
                  isWrong ? "bg-red-700" : "bg-slate-800",
                  isCorrect && "outline text-green-500"
                )}
              >
                {item}
                {isCorrect && <FaCheck />}
                {isWrong && <MdNearbyError />}
              </button>
            </li>
          );
        })}
      </ul>
      {data?.random && (
        <Link
          href={`/quiz/${data.random}`}
          className="flex items-center gap-1 text-blue-400"
        >
          <FiRepeat className="mt-1" />
          Do it again!
        </Link>
      )}
    </>
  );
};
