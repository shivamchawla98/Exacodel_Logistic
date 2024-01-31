import gql from "graphql-tag";

const GET_ALL_TRUCKS = gql`
  query GET_ALL_TRUCKS {
    getAllTrucks {
      id
      companyName
      Adress
      State
      City
      Pincode
      Country
      transportertype
      vehicletype
      maxacceptablepayload
      pickupcity
      pickupcitypincode
      dropcity
      dropcitypincode
      transportcharges
    }
  }
`;

export default GET_ALL_TRUCKS;
