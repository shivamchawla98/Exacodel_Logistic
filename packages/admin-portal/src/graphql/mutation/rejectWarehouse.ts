import { gql } from "@apollo/client";

const WAREHOUSE_REJECT = gql`
  mutation WAREHOUSE_REJECT($warehouseId: Int!, $remarks: String!) {
    warehousereject(warehouseid: $warehouseId, remarks: $remarks) {
      id
    }
  }
`;

export default WAREHOUSE_REJECT;
