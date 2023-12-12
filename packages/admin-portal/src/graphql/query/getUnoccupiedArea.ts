import { gql } from "@apollo/client";

const GET_UNOCCUPIED_AREA_SUM = gql`
  query GET_UNOCCUPIED_AREA_SUM {
    getTotalunoccupiedspaceSum
  }
`;

export default GET_UNOCCUPIED_AREA_SUM;
