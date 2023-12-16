import gql from "graphql-tag";

const LIST_OF_WAREHOUSE_USING_LAT_LNG = gql`
  query LIST_OF_WAREHOUSE_USING_LAT_LNG($lat: Float!, $lng: Float!) {
    searchWarehousesByUserLocation(userLatitude: $lat, userLongitude: $lng) {
      id
      companyName
      totalAvailiableArea
      warehouseType
      storageCharges
      Adress
    }
  }
`;

export default LIST_OF_WAREHOUSE_USING_LAT_LNG;
