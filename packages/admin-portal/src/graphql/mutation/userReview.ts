import { gql } from "@apollo/client";

const USER_REVIEW = gql`mutation USER_REVIEW($userId: Float!) {
    userReveiw(userId: $userId)
  }`

export default USER_REVIEW;