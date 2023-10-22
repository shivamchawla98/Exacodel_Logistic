import { gql } from "@apollo/client";

const GET_USER_ID = gql`
query GET_USER_ID($userId: Int!) {
  getUserById(userId: $userId) {
      id
      BillingCode
      userType
      customerSubType
      vendorSubType
      overseasAgentSubType
      email
      password
      companyType
      industryType
      companyName
      state
      pincode
      Adress
      city
      country
      company_reg_no
      company_pan_no
      gst_no
      first_name
      last_name
      annualTurnover
      Designation
      mobile
      website
    }
  }
`;


export default GET_USER_ID;