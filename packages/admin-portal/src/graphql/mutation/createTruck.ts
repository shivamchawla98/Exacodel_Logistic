import { gql } from "@apollo/client";

const CREATE_TRUCK = gql`
  mutation CREATE_TRUCK($truckData: TruckDTO!) {
    createTruck(truckData: $truckData) {
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
export default CREATE_TRUCK;
