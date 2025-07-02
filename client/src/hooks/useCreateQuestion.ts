// hooks/useCreateQuestion.ts
import { gql, useMutation } from "@apollo/client";

const CREATE_QUESTION = gql`
  mutation CreateQuestion($input: QuestionInput!) {
    createQuestion(input: $input) {
      id
      text
      passed
    }
  }
`;

export function useCreateQuestion() {
  const [createQuestionMutation, { loading, error, data }] = useMutation(CREATE_QUESTION, {
    refetchQueries: ['GetQuestions'], // This name must match the query operation name
  });

  const createQuestion = async (input: { text: string; passed: boolean }) => {
    const response = await createQuestionMutation({
      variables: { input },
    });
    return response.data?.createQuestion;
  };

  return {
    createQuestion,
    loading,
    error,
    data,
  };
}
