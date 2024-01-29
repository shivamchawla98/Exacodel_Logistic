import gql from "graphql-tag";

const CREATE_BOOKING_FREIGHT = gql`
  mutation CREATE_BOOKING_FREIGHT($input: CreateBookingshippingInput!) {
    createBookingshipping(input: $input) {
      id
      departure
      arrival
      readytoload
      typeofdelivery
      cargo_details
      price
    }
  }
`;

export default CREATE_BOOKING_FREIGHT;
