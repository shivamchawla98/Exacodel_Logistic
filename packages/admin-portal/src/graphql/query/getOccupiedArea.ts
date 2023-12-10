import { gql } from "@apollo/client";

const GET_OCCUPIED_AREA_SUM = gql`
  query GET_OCCUPIED_AREA_SUM {
    getTotaloccupiedspaceSum
  }
`;

export default GET_OCCUPIED_AREA_SUM;
