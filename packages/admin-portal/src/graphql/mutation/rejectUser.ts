import { gql } from "@apollo/client";

const REJECT_USER_MUTATION = gql`
  mutation RejectUser($userId: Int!) {
    rejectUser(userId: $userId) {
      id
      
    }
  }
`;

export default REJECT_USER_MUTATION;