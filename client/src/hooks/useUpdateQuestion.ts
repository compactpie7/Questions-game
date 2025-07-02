// hooks/useUpdateQuestion.ts
import { gql, useMutation } from "@apollo/client";

const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($id: Int!, $input: QuestionInput!) {
    updateQuestion(id: $id, input: $input) {
      id
      text
      passed
    }
  }
`;

export function useUpdateQuestion() {
    const [updateQuestionMutation, { loading, error }] = useMutation(UPDATE_QUESTION);

    const updateQuestion = async (id: number, input: { text: string; passed: boolean }) => {
        const res = await updateQuestionMutation({ variables: { id, input } });
        return res.data?.updateQuestion;
    };

    return { updateQuestion, loading, error };
}
