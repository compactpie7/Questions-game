async function updateQuestion(id, text, passed) {
    const query = `
    mutation Update($id: Int!, $input: QuestionInput!) {
      updateQuestion(id: $id, input: $input) {
        id
        text
        passed
      }
    }
  `;

    const variables = {
        id,
        input: {
            text,
            passed
        }
    };

    const res = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables })
    });

    const json = await res.json();
    return json.data.updateQuestion;
}
