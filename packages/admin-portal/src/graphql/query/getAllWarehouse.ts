import { gql } from "@apollo/client";

const GET_ALL_WAREHOUSE = gql`
    query GET_ALL_WAREHOUSE{
        getAllWarehouses {
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
`

export default GET_ALL_WAREHOUSE;