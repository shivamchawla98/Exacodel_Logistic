import gql from "graphql-tag";


const UPDATE_PROFILE_CORPORATE_ADDRESS = gql`
mutation UPDATE_PROFILE_CORPORATE_ADDRESS($id: Float!, $input: CorporateAddressDto!) {
    updateProfilecorporateAdress(userId: $id, corporateAddressDto: $input) {
      id
      companyName
      corporateAddress {
        id
        address
        state
        city
        pincode
        country
      }
    }
  }
  `
export default UPDATE_PROFILE_CORPORATE_ADDRESS