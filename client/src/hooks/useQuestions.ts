// hooks/useQuestions.ts
import { useQuery, gql } from "@apollo/client";

const GET_QUESTIONS = gql`
  query {
    questions {
      id
      text
      passed
    }
  }
`;

export function useQuestions() {
  const { data, loading, error, refetch } = useQuery(GET_QUESTIONS, {
    fetchPolicy: "network-only"
  });

  return {
    questions: data?.questions ?? [],
    loading,
    error,
    refetch, // <- expose this
  };
}
