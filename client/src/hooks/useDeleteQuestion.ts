// hooks/useDeleteQuestion.ts
import { gql, useMutation } from "@apollo/client";

const DELETE_QUESTION = gql`
  mutation DeleteQuestion($id: Int!) {
    deleteQuestion(id: $id) {
      id
      text
      passed
    }
  }
`;

export function useDeleteQuestion() {
    const [deleteQuestionMutation, { loading, error }] = useMutation(DELETE_QUESTION);

    const deleteQuestion = async (id: number) => {
        const res = await deleteQuestionMutation({ variables: { id } });
        return res.data?.deleteQuestion; // returns updated question list
    };

    return { deleteQuestion, loading, error };
}
