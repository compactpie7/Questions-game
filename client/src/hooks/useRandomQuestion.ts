// hooks/useRandomQuestion.ts
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_QUESTIONS = gql`
  query {
    questions {
      id
      text
      passed
    }
  }
`;

export function useRandomQuestion() {
    const { data, loading, error, refetch } = useQuery(GET_QUESTIONS);
    const [current, setCurrent] = useState<null | {
        id: number;
        text: string;
        passed: boolean;
    }>(null);

    const nextQuestion = () => {
        if (!data?.questions || data.questions.length === 0) return;

        const available = data.questions.filter((q: any) => !q.passed && q.id !== current?.id);
        const pool = available.length > 0 ? available : data.questions.filter((q: any) => !q.passed);

        if (pool.length === 0) {
            setCurrent(null); // all passed
            return;
        }

        const random = pool[Math.floor(Math.random() * pool.length)];
        setCurrent(random);
    };


    useEffect(() => {
        if (data?.questions?.length) {
            nextQuestion();
        }
    }, [data]);

    return {
        question: current,
        nextQuestion,
        loading,
        error,
        refetch
    };
}
