import { gql } from "@apollo/client";

const GET_WAREHOUSE_APPROVAL_PENDING_LIST = gql`
  query GET_WAREHOUSE_APPROVAL_PENDING_LIST($userId: Int!) {
    getWarehousePendingForApprovalListbyuserid(userId: $userId) {
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

export default GET_WAREHOUSE_APPROVAL_PENDING_LIST;
