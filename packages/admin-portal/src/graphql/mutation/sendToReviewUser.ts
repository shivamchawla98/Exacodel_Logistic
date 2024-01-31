import { gql } from "@apollo/client";

const SEND_TO_REVIEW_USER = gql`
  mutation SEND_TO_REVIEW_USER($id: Float!) {
    userReveiw(userId: $id)
  }
`;

export default SEND_TO_REVIEW_USER;
