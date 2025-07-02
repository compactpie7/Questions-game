async function createQuestion(text, passed) {
    const res = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
        mutation {
          createQuestion(input: { text: "${text}", passed: ${passed} }) {
            id
            text
            passed
          }
        }
      `
        })
    });

    const json = await res.json();
    return json.data.createQuestion;
}
