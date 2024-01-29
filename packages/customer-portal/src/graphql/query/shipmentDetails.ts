import gql from "graphql-tag";

const GET_SHIPMENT_DETAILS = gql`
  query GET_SHIPMENT_DETAILS(
    $fromShipment: ShippingMode!
    $fromCountry: String!
    $fromState: String!
    $fromName: String!
    $toShipment: ShippingMode!
    $toCountry: String!
    $toState: String!
    $toName: String!
    $ST20: Float!
    $ST40: Float!
    $REF20: Float!
    $REF40: Float!
    $HQ40: Float!
    $HQ45: Float!
    $currency: String!
    $date: String!
  ) {
    getShipmentDetails(
      fromshipmentMode: $fromShipment
      fromCountry: $fromCountry
      fromstate: $fromState
      fromname: $fromName
      toshipmentMode: $toShipment
      toCountry: $toCountry
      tostate: $toState
      toname: $toName
      ST20: $ST20
      ST40: $ST40
      REF20: $REF20
      REF40: $REF40
      HQ40: $HQ40
      HQ45: $HQ45
      currency: $currency
      date: $date
    ) {
      shipmentId
      cityFrom {
        name
      }
      cityTo {
        name
      }
      portFrom {
        name
      }
      portTo {
        name
      }
      freight {
        price
        transitTime
        shippingLine
      }
    }
  }
`;

export default GET_SHIPMENT_DETAILS;
