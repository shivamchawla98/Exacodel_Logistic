import { gql } from "@apollo/client";

 const GET_WAREHOUSE_BY_ID = gql`
query GET_WAREHOUSE_BY_ID($id: Int!) {
    getWarehouseById(id: $id) {
    
      companyName
      Adress
      State
      City
      Pincode
      Country
      warehouseType
      totalSquareArea
      totalAvailiableArea
      occupiedSpace
      unoccupiedSpace
      rackedSpace
      minimumStorageRent
      minimumStorageCharges_per_pallet
      minimumStorageArea
      minimumstorageArea_per_pallet
      storageCharges
      storageCharges_per_pallet
      hazardousStorageType
      temperatureType
      temperatureCapacity
    }
  }
`

export default GET_WAREHOUSE_BY_ID;