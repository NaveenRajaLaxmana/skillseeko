import {ApolloClient,InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
const httpLink =new createHttpLink({
    uri: "http://localhost:5000/graphql",
  })
  
  const authlink = setContext((_,{headers}) => {

    const token =   JSON.parse(localStorage.getItem('token'))
    return {
      headers:{
        ...headers,
        Authorization: token ? `${token}`: ""
      }
    }
  }) 

  const client = new ApolloClient({
    uri:"http://localhost:5000/.netlify/functions/api/",
    cache: new InMemoryCache()
  })

  export default client