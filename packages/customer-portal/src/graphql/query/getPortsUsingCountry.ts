import gql from "graphql-tag";

const GET_PORTS_USING_COUNTRY = gql`
  query GET_PORTS_USING_COUNTRY($input: String!) {
    SuggestionsCountry(searchTerm: $input) {
      Country
      name
      State
    }
  }
`;

export default GET_PORTS_USING_COUNTRY;
