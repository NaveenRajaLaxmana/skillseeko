import {ApolloClient,InMemoryCache, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
const httpLink =new createHttpLink({
    uri: "https://skill-seeko-backend.netlify.app/.netlify/functions/api/",
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
    uri:"https://skill-seeko-backend.netlify.app/.netlify/functions/api/",
    cache: new InMemoryCache()
  })

  export default client