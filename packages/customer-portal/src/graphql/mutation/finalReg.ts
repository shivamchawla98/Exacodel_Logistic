import gql from "graphql-tag";

const FINALREGISTRATION = gql`mutation FINALREGISTRATION($input: Finalreg!, $userId: Float!, $userInput: UpdateUsertype!, $compcontact: CompanyContactDto!, $corpad: CorporateAddressDto!, $kycin: KycInput!) {
    finalreg(input: $input, userId: $userId, userInput: $userInput, compcontact: $compcontact, corpad: $corpad, kycin: $kycin) {
      id
    }
  }`

export default FINALREGISTRATION;