import {gql} from '@apollo/client'

const GET_COURSES = gql `
    query getCourses{
        courses{
            id
            ownerid
            name
            price
            hours
            thumbnail
            description
            instructor{
            name
            id
            }
            videos {
            id
            url
            name
            }
            }
    }
`

const CHECK_LOGIN = gql`
    query getuser{
        user{
            id
        username
        email
        courselist
        token
        }
    }
`

export {GET_COURSES,CHECK_LOGIN}