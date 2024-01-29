"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
// import SubmitButtons from "./SubmitButtons";
import Address from "./Address";
import DomesticTransportFTLDetails from "./DomesticTransportFTLDetails";
import DomesticTransporLTLtDetails from "./DomesticTransportLCLDetails";
import { useState } from "react";
import { Radio } from "@material-tailwind/react";
import CREATE_TRUCK from "@/graphql/mutation/createTruck";
import { useMutation, useQuery } from "@apollo/client";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import ApprovedPopup from "@/app/admin/components/ApprovedPopup";
import GET_USER_BY_ID from "@/graphql/query/getUserById";

const validationSchema = Yup.object({
  billingAddress: Yup.string(),
});

function AdminInputDomesticTransport() {
  const [isFTL, setIsFTL] = useState(true);
  const [createTruck, { data, loading, error }] = useMutation(CREATE_TRUCK);
  const [created, setCreated] = useState(false);
  const token: any = Cookies.get("jwtToken");
  const decodedToken: any = jwtDecode(token);
  console.log("token : ", decodedToken);
  const {
    data: userData,
    error: userError,
    refetch,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: decodedToken?.id,
    },
  });

  const handleSubmit = async (values: any) => {
    console.log("values : ", values);
    console.log("user data : ", userData);
    const user = userData.getUserById;

    try {
      let data = await createTruck({
        variables: {
          truckData: {
            companyName: user.companyName || "Exacodel",
            Adress: user.corporateAddress
              ? user.corporateAddress
              : values.streetAddress,
            State: user.state || values.state,
            City: user.city || values.city,
            Country: user.country || values.country,
            Pincode: values.postalCode,
            transportertype: isFTL ? "FTL" : "LTL",
            vehicletype: isFTL ? values.typeOfVehicle : "",
            maxacceptablepayload: isFTL ? "Max_load_850_kgs" : "",
            pickupcity: values.pickupCityState,
            pickupcitypincode: values.pickupPincode,
            dropcity: values.dropCityState,
            dropcitypincode: values.dropPincode,
            userId: decodedToken.id,
            transportcharges: values.transportCharges,
          },
        },
      });
      console.log("data : ", data);
    } catch (error) {
      console.log("error: ", error);
    }
    setCreated(true);
    console.log(values);
  };

  // initial values
  const initialValues = {
    country: "",
    region: "",
    city: "",
    streetAddress: "",
    postalCode: "",
    typeOfTransport: "",
    typeOfVehicle: "",
    maxPayload: "",
    pickupCityState: "",
    pickupPincode: "",
    dropCityState: "",
    dropPincode: "",
    transportCharges: "",
  };

  return (
    <>
      <h2 className="text-lg font-semibold leading-7 text-gray-900 pl-11 pt-11">
        DOMESTIC TRANSPORT & TRUCKING DETAILS
      </h2>
      {created && (
        <ApprovedPopup
          onApprovalClick={() => console.log("done !")}
          name=""
          operation="Truck registered"
          forType=""
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
            <Address />
            <div className="flex gap-10">
              <Radio onClick={() => setIsFTL(false)} name="type" label="LTL" />
              <Radio
                onClick={() => setIsFTL(true)}
                name="type"
                label="FTL"
                defaultChecked
              />
            </div>
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            {isFTL && <DomesticTransportFTLDetails />}
            {!isFTL && <DomesticTransporLTLtDetails />}
            <hr className="my-3 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="col-span-full flex justify-end mt-6">
              <button
                type="submit"
                className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4"
              >
                Create Truck
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AdminInputDomesticTransport;
