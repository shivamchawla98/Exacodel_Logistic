import { gql } from "@apollo/client";

const CREATE_WAREHOUSE  = gql`
mutation CREATE_WAREHOUSE ($input: WarehouseInput!) {
    createWarehouse(input: $input) {
      companyName
      id
      Adress
    }
  }
`

export default CREATE_WAREHOUSE;