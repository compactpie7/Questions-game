import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Question {
    id: Int!
    text: String!
    passed: Boolean!
  }

  input QuestionInput {
    text: String!
    passed: Boolean!
  }

  type Query {
    questions: [Question!]!
  }

  type Mutation {
    createQuestion(input: QuestionInput!): Question!
    updateQuestion(id: Int!, input: QuestionInput!): Question!
    deleteQuestion(id: Int!): [Question!]!
  }
`);

export default schema
