import { gql } from "@apollo/client";

const APPROVE_USER_MUTATION = gql`
  mutation APPROVE_USER_MUTATION($userId: Int!, $input: Updateapproved!, $compcontact: CompanyContactDto!, $corpad: CorporateAddressDto!, $kycin: KycInput!) {
    approveUser(userId: $userId, input: $input, compcontact: $compcontact, corpad: $corpad, kycin: $kycin) {
      id
      BillingCode
      userType
    }
  }
`;


export default APPROVE_USER_MUTATION;