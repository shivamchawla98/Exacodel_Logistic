import { gql } from "@apollo/client";

const LIST_INITIAL_REGISTRATION = gql`
  query {
    listInitialRegistrations {
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

export default LIST_INITIAL_REGISTRATION;