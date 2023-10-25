import { gql } from "@apollo/client";

const GET_USER_BY_ID = gql`
query GET_USER_ID($id: Int!){
  getUserById(userId: $id) {
    isapproved
    last_name
    first_name
    userType
  }
}
`

export default GET_USER_BY_ID