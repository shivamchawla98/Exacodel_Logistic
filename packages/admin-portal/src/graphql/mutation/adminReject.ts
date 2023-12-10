import { gql } from "@apollo/client";

const ADMIN_REJECT = gql`mutation ADMIN_REJECT($id: Float!, $input: Adminreject!) {
    adminreject(userId: $id, input: $input) {
      companyName
      first_name
    }
  }`

export default ADMIN_REJECT;