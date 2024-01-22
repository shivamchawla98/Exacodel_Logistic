import { gql } from "@apollo/client";

const GET_ALL_WAREHOUSE_APPROVAL_PENDING_LIST = gql`
  query GET_ALL_WAREHOUSE_APPROVAL_PENDING_LIST {
    warehousesPendingApproval {
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

export default GET_ALL_WAREHOUSE_APPROVAL_PENDING_LIST;
