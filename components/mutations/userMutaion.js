import {gql} from '@apollo/client'

const USER_LOGIN = gql`
    mutation login($username:String!,$password:String!){
        loginUser(username:$username,password:$password){
            token
    username
    email
        }
    }
`

export {USER_LOGIN}