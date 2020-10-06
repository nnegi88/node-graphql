const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { rootResolver } = require("./resolver/query/root");

// Graphql Schema
const schemaString = require("fs").readFileSync("schema.graphql").toString();
var schema = buildSchema(schemaString);

// Create express server and a graphql endpoint
var app = express();

app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log("Express Graphql Server now running on localhost:4000/graphql")
);
