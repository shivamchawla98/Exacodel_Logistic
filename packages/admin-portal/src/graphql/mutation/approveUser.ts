import { gql } from "@apollo/client";

const APPROVE_USER_MUTATION = gql`
  mutation approveUser($userId: Int!, $input: Updateapproved!) {
    approveUser(userId: $userId, input: $input) {
      id
      BillingCode
      userType
    }
  }
`;


export default APPROVE_USER_MUTATION;