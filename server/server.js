import express from "express";
import cors from "cors"; // <-- add this
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import root from "./resolvers/questionResolvers.js";

const app = express();

// Enable CORS for all routes and origins
app.use(cors()); // <-- add this

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log("🚀 Server running at http://localhost:4000/graphql");
});
