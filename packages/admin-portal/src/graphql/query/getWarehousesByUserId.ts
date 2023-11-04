import { gql } from "@apollo/client";

const GET_WAREHOUSE_BY_USER_ID = gql`
query GET_WAREHOUSE_BY_USER_ID($id: Int!){
	getWarehousesByUserId(userId: $id) {
    id
    companyName
    warehouseType
    State
  }
}
`

export default GET_WAREHOUSE_BY_USER_ID;