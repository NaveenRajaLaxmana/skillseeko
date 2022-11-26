import {gql} from '@apollo/client'

const INSTRUCTOR_LOGIN = gql`
    mutation loginTutor($email:String!,$password:String!){
        loginTutor(email:$email,password:$password){
            token
    name
    email
        }
    }
`

const INSTRUCTOR_REGISTER = gql`
mutation addInstructor($name:String!,$email:String!,$password:String!,$phone:String!)
{
    addInstructor(name:$name,email:$email,password:$password,phone:$phone)
    {
        token,
        email,
        name
    }
}
`

export {INSTRUCTOR_REGISTER,INSTRUCTOR_LOGIN}