import { gql } from "@apollo/client";

const GET_REJECTED_WAREHOUSE = gql`
  query GET_REJECTED_WAREHOUSE {
    getRejectedWarehouseList {
      id
      companyName
      warehouseType
      State
      unoccupiedSpace
      warehouseType
      occupiedSpace
      totalSquareArea
    }
  }
`;

export default GET_REJECTED_WAREHOUSE;
