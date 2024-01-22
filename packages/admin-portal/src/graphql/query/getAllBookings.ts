import { gql } from "@apollo/client";

const ALL_BOOKINGS = gql`
  query ALL_BOOKINGS {
    allBookings {
      moveInDate
      moveOutDate
      spaceMaterialType
      uniquecode
      user {
        id
        last_name
        first_name
        companyType
        companyName
      }
    }
  }
`;

export default ALL_BOOKINGS;
