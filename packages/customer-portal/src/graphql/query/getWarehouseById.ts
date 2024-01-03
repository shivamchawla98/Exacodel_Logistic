import gql from "graphql-tag";

const GET_WARE_HOUSE_BY_ID: any = gql`
  query GET_WARE_HOUSE_BY_ID($id: Int!) {
    getWarehouseById(id: $id) {
      hazardousStorageType
      warehouseType
      temperatureType
      latitude
      longitude
      temperatureCapacity
      storageCharges
      uniqueid
      Adress
      Pincode
    }
  }
`;

export default GET_WARE_HOUSE_BY_ID;
