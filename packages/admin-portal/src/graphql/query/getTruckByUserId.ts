import { gql } from "@apollo/client";

const GET_TRUCK_BY_USER_ID = gql`
query GET_TRUCK_BY_USER_ID($id: Int!) {
    gettrucksByUserId(userId: $id) {
      id
      companyName
      State
      transportertype
    }
  }
`

export default GET_TRUCK_BY_USER_ID;