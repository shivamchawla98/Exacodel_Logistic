import { gql } from "@apollo/client";

const ALL_SHIPPING_BOOKINGS = gql`
  query ALL_SHIPPING_BOOKINGS {
    bookingshippings {
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

export default ALL_SHIPPING_BOOKINGS;
