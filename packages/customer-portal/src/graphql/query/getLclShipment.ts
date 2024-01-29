import gql from "graphql-tag";

const GET_SHIPMENT_DETAILS_LCL = gql`
  query GET_SHIPMENT_DETAILS_LCL(
    $fromShipment: ShippingMode!
    $fromCountry: String!
    $fromState: String!
    $fromName: String!
    $toShipment: ShippingMode!
    $toCountry: String!
    $toState: String!
    $toName: String!
    $currency: String!
    $weight: Float!
    $volume: Float!
    $date: String!
  ) {
    getShipmentDetailslcl(
      fromshipmentMode: $fromShipment
      fromCountry: $fromCountry
      fromstate: $fromState
      fromname: $fromName
      toshipmentMode: $toShipment
      toCountry: $toCountry
      tostate: $toState
      toname: $toName
      currency: $currency
      weight: $weight
      volume: $volume
      date: $date
    ) {
      shipmentId
      transportationMode
      currency
      cityFrom {
        id
        name
      }
      cityTo {
        id
        name
      }
      portFrom {
        name
        countryCode
      }
      portTo {
        name
        countryCode
      }
      oceanFreight {
        shippingLine
        logo
        distance
        co2
        originalPrice
        originalCurrency
        overdue
        transitTime
        truckFrom {
          price
          originalPrice
          originalCurrency
        }
        truckTo {
          price
          distance
          originalPrice
        }
      }
    }
  }
`;

export default GET_SHIPMENT_DETAILS_LCL;
