import gql from "graphql-tag";

const UPDATE_PROFILE_COMPANY_CONTACT = gql`
mutation UPDATE_PROFILE_COMPANY_CONTACT($id: Float!, $input: CompanyContactDto!) {
    updateProfileCompanyContact(userId: $id, companyContactDto: $input) {
      id
      companyName
      companyContact {
        id
        firstName
        lastName
        designation
        mobileNo
        emailId
      }
      website
      country
    }
  }
  
`
export default UPDATE_PROFILE_COMPANY_CONTACT;