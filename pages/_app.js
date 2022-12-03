import '../styles/globals.css'
import {ApolloProvider} from '@apollo/client'
import  { AuthProvider } from 'contexts/AuthContext'
import { TutorAuthProvider } from 'contexts/TutorContext'
import client from 'apolloClient'



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <TutorAuthProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </TutorAuthProvider>
    </ApolloProvider>
  
  )
}


export default MyApp
