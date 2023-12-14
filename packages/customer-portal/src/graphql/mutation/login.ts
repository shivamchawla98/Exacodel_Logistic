import gql from "graphql-tag";

const LOGIN = gql`
  mutation LOGIN($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
    }
  }
`;

export default LOGIN;
