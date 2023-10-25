import { gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
mutation Login($loginUserInput:LoginUserInput!){
  login(loginUserInput:$loginUserInput) {
    access_token
  }
}
`;

export default LOGIN_MUTATION;