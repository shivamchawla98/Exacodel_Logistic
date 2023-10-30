import { gql } from "@apollo/client";

const SEND_TO_REVIEW_USER = gql
`mutation SEND_TO_REVIEW_USER($id: Float!) {
    sendtoreveiwuser(userId: $id) {
      first_name
    }
}`

export default SEND_TO_REVIEW_USER;