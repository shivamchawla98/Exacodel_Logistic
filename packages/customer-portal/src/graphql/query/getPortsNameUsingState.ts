import gql from "graphql-tag";

const GET_PORTS_NAME_USING_STATE = gql`
  query GET_PORTS_NAME_USING_STATE($input: String!) {
    SuggestionsState(searchTerm: $input) {
      name
    }
  }
`;

export default GET_PORTS_NAME_USING_STATE;
