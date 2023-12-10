import { gql } from "@apollo/client";

const GET_USER_BY_ID = gql`
query GET_USER_ID($id: Int!){
  getUserById(userId: $id) {
    isapproved
    id
		BillingCode
    userType
    customerSubType
    vendorSubType
    overseasAgentSubType
    email
    otp
    otp_veified
    password
    companyType
    industryType
    companyName
    state
    pincode
    Adress
    city
    country
    last_name
    first_name
    mobile
    annualTurnover
    company_pan_no
    company_reg_no
    Designation
    website
    gst_no
    remarks
  }
}
`

export default GET_USER_BY_ID