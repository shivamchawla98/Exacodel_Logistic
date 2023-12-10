import { gql } from "@apollo/client";

const GET_WAREHOUSE_REVIEW_LIST = gql`
  query GET_WAREHOUSE_REVIEW_LIST {
    getWarehousereveiwedlist {
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

export default GET_WAREHOUSE_REVIEW_LIST;
