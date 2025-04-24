import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { client } from "./graphql/apolloClient";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";
// import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client_id = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GoogleOAuthProvider clientId={client_id}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// reportWebVitals();
