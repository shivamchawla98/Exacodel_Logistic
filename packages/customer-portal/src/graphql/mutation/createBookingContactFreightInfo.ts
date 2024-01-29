import gql from "graphql-tag";

const CREATE_BOOKING_CONTACT = gql`
  mutation CREATE_BOOKING_CONTACT($input: BookingshippingContactinfoInput!) {
    createbookingcontact(input: $input) {
      id
      firstname
      lastname
      phoneno
      email
      description
    }
  }
`;

export default CREATE_BOOKING_CONTACT;
