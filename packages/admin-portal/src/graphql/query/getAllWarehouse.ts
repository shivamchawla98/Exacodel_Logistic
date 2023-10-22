import { gql } from "@apollo/client";

const GET_ALL_WAREHOUSE  = gql`
    query GET_ALL_WAREHOUSE{
        getAllWarehouses {
          id
          companyName
          warehouseType
             State
        }
      }
`

export default GET_ALL_WAREHOUSE;