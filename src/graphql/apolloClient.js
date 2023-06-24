import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: process.env.REACT_APP_API_HOST,
  headers: {
    authorization: localStorage.getItem("my-pima-token") || "",
  },
  fetchOptions: {
    mode: "cors",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export { client };
