import gql from "graphql-tag";

const WAREHOUSE_ALL_BOOKING = gql`
  query WAREHOUSE_ALL_BOOKING {
    allBookings {
      id
      moveInDate
      moveOutDate
      spaceMaterialType
      specialInstructions
      uniquecode
    }
  }
`;

export default WAREHOUSE_ALL_BOOKING;
