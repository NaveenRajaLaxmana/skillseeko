import {gql} from '@apollo/client'

const USER_LOGIN = gql`
    mutation login($username:String!,$password:String!){
        loginUser(username:$username,password:$password){
            token
    username
    email
    courselist
        }
    }
`
const USER_REGISTER = gql`
mutation register($username:String!,$password:String!,$email:String!)
{
    addUser(username:$username,password:$password,email:$email)
    {
        token,
        email,
        username,
        courselist
    }
}
`

const USER_BUY_COURSE = gql `
mutation buyCourse($email:String!,$courses:[String])
{
    buyCourse(email:$email,courses:$courses)
    {
        email
    }
}
`

export {USER_LOGIN,USER_REGISTER,USER_BUY_COURSE}