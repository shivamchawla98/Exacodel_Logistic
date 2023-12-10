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
    corporateAddress {
      address
      state
      city
      pincode
      country
    }
    kyc {
      certificate_of_registration
      company_pan_card
      aadhar_card
      pan_card
      iso_certificate
      aeo_certificate
      iata_certificate
      duns_certificate
      manufacturing_license
      warehouse_insurance
      any_other_trading_license
    }
  }
}
`

export default GET_USER_BY_ID