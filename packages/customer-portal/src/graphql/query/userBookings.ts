import gql from "graphql-tag";

const USER_BOOKINGS = gql`
  query USER_BOOKINGS($userId: Int!) {
    bookingsByUserId(userId: $userId) {
      id
      moveInDate
      moveOutDate
      uniquecode
      specialInstructions
    }
  }
`;

export default USER_BOOKINGS;
