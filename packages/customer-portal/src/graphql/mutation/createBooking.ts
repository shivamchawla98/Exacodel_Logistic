import gql from "graphql-tag";

const CREATE_BOOKING = gql`
  mutation CREATE_BOOKING($input: BookingInput!) {
    createBooking(bookingInput: $input) {
      id
      moveInDate
    }
  }
`;

export default CREATE_BOOKING;
