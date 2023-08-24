import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RetryLink } from 'apollo-link-retry'
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({
  uri: process.env.REACT_APP_API_HOST,
  headers: {
    authorization: localStorage.getItem('my-pima-token') || '',
    'Apollo-Require-Preflight': 'true'
  },
  fetchOptions: {
    mode: 'cors'
  }
})

const retryLink = new RetryLink({
  delay: {
    initial: 300, // Initial delay in milliseconds
    max: 1000, // Maximum delay in milliseconds
    jitter: true // Adds randomization to the delay
  },
  attempts: {
    max: 5, // Maximum number of retry attempts
    retryIf: (error, _operation) => {
      // Decide whether to retry based on the error type
      // For example, you might want to retry on network errors or specific status codes
      return !!error
    }
  }
})

const client = new ApolloClient({
  link: retryLink.concat(link),
  cache: new InMemoryCache()
})

export { client }
