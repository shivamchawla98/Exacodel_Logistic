import { gql } from "@apollo/client";

const GET_ALL_APPROVED_WAREHOUSE = gql`
  query GET_ALL_APPROVED_WAREHOUSE {
    getapprovedWarehouseList {
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

export default GET_ALL_APPROVED_WAREHOUSE;
