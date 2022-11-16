import '../styles/globals.css'
import {ApolloProvider,ApolloClient,InMemoryCache, createHttpLink, useQuery} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import AuthContext, { AuthProvider } from 'contexts/AuthContext'

const httpLink =new createHttpLink({
  uri: "http://localhost:5000/graphql",
})

const authlink = setContext((_,{headers}) => {
  console.log(headers)
  const token =   JSON.parse(localStorage.getItem('token'))
  return {
    headers:{
      ...headers,
      Authorization: token ? `${token}`: ""
    }
  }
}) 

const client = new ApolloClient({
  link:authlink.concat(httpLink),
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  
  )
}

export default MyApp
