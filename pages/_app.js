import '../styles/globals.css'
import {ApolloProvider} from '@apollo/client'
import  { AuthProvider } from 'contexts/AuthContext'
import { TutorAuthProvider } from 'contexts/TutorContext'
import client from 'apolloClient'
import CartProvider from 'contexts/CartContext'



function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <TutorAuthProvider>
        <AuthProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </AuthProvider>
      </TutorAuthProvider>
    </ApolloProvider>
  
  )
}


export default MyApp
