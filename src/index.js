import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//     </div>
//   );
// }

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
