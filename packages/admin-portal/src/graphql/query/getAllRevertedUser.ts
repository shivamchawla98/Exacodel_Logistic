import { gql } from "@apollo/client";

const GET_ALL_REVERTED_USER = gql`
  query {
    getAllRevertedUsers {
      email
      userType
      first_name
      customerSubType
      vendorSubType
      overseasAgentSubType
      id
      isapproved
      remarks
      companyName
    }
  }
`;

export default GET_ALL_REVERTED_USER;
