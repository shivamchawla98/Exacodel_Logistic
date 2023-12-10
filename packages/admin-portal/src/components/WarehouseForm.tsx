'use client';

import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import Address from './Address';

import AdminInputWarehouseDetail from './WarehouseDetails';
import CompanyDetails from './CompanyDetails';
import { useMutation } from '@apollo/client';
import ApprovedPopup from '@/app/admin/components/ApprovedPopup';
import { useState } from 'react';
import CREATE_WAREHOUSE from '@/graphql/mutation/createWarehouse';
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GuiMap from '../app/location/componet/GuiMap'


const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    streetAddress: Yup.string().required('Street Address is required'),
    region: Yup.string().required('Region/State is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string()
        .matches(/^[0-9]{6}$/, 'PIN code must be a 6-digit number')
        .required('PIN code is required'),
    country: Yup.string().required('Country is required'),
    typeOfWarehouse: Yup.string().required('Type of Warehouse is required'),
    totalStorageArea: Yup.string().required('Total Storage Area is required'),
    totalAvailableArea: Yup.string().required('Total Available Area is required'),
    occupiedSpace: Yup.string().required('Occupied Space is required'),
    unOccupiedSpace: Yup.string().required('Unoccupied Space is required'),
    rackedSpace: Yup.string().required('Racked Space is required'),
    minimumStorageRent: Yup.string().required('Minimum Storage Rent per Sq Ft is required'),
    minimumStorageCharges_per_pallet: Yup.string().required('Minimum Storage Charges per Pallet is required'),
    minimumStorageArea: Yup.string().required('Minimum Storage Area per Sq Ft is required'),
    minimumstorageArea_per_pallet: Yup.string().required('Minimum Storage Area per Pallet is required'),
    storageChargesPerSqFt: Yup.string().required('Storage Charges per Sq Ft is required'),
    // storageChargesPerPallet: Yup.string().required('Storage Charges per Pellet Ft is required'),
    // minimumStorageChargesPerPallet: Yup.string().required('Storage Charges per Pallet is required'),
    // hazardousStorageCapacity: Yup.string().required('Hazardous Storage Capacity is required'),
    // activePassive: Yup.string().required('Active/Passive Temperature Type is required'),
    // temperatureCapacity: Yup.string().required('Temperature Capacity is required'),
});
// initial values


function AdminInputWarehouse({ setActiveItem }: any) {
    const {lat, lng, city, address, country, pincode, State} = useSelector((state: any) => state.gmapSlice)
    const [createWarehouse, { data, error }] = useMutation(CREATE_WAREHOUSE);
    const [companyName, setCompanyName] = useState('')
    const [showPopUp, setShowPopUp] = useState(false)
    console.log("State from state", State != '' ? State : null);
    
    const { userId } = useSelector((state: any) => state.loginSlice)
    const initialValues = {
        companyName: '',
        billingCode: '',
        gstNumber: '',
        country: '',
        region: '',
        city: '',
        streetAddress: '',
        postalCode: '',
        typeOfWarehouse: '',
        totalStorageArea: '',
        totalAvailableArea: '',
        occupiedSpace: '',
        unOccupiedSpace: '',
        rackedSpace: '',
        wareHouseInsurance: '',
        activePassive: '',
        temperatureCapacity: '',
        hazardousStorageCapacity: '',
        storageChargesPerSqFt: '',
        storageChargesPerPallet: '',
        minimumStorageAreaPerSqFt: '',
        minimumStorageAreaPerPallet: '',
        minimumStorageRentPerSqFt: '',
        minimumStorageChargesPerPallet: '',
        termsAccepted: '',
    };


    const handleSubmit = async (values: any) => {
        // Handle form submission
        console.log("GraphQL Query:", CREATE_WAREHOUSE?.loc?.source?.body);
        setCompanyName(values.companyName)
        console.log(values);
        try {
            const result = await createWarehouse({
                variables: {
                    input: {
                        "companyName": values.companyName,
                        "Adress": values.streetAddress,
                        "State": values.region,
                        "City": values.city,
                        "Pincode": values.postalCode,
                        "Country": values.country,
                        "warehouseType": values.typeOfWarehouse,
                        "totalSquareArea": `${values.totalStorageArea}`,
                        "totalAvailiableArea": `${values.totalAvailableArea}`,
                        "occupiedSpace": `${values.occupiedSpace}`,
                        "unoccupiedSpace": `${values.unOccupiedSpace}`,
                        "rackedSpace": `${values.rackedSpace}`,
                        "minimumStorageRent": values.minimumStorageRent * 1,
                        "minimumStorageCharges_per_pallet": values.minimumStorageCharges_per_pallet * 1,
                        "minimumStorageArea": `${values.minimumStorageArea}`,
                        "minimumstorageArea_per_pallet": `${values.minimumstorageArea_per_pallet}`,
                        "storageCharges": values.storageChargesPerSqFt * 1,
                        "storageCharges_per_pallet": values.storageChargesPerPallet * 1,
                        "hazardousStorageType": `${values.hazardousStorageCapacity}`,
                        "temperatureType": `${values.activePassive}`,
                        "temperatureCapacity": `${values.temperatureCapacity}`,
                        "userId": userId
                    }
                }
            })


            console.log("myEror : (", result);

            setShowPopUp(true)



        } catch (error) {
            console.log("errror found : ", error);
            toast.error("Error in submiting data", {
                position: toast.POSITION.TOP_CENTER,
            })

        }

    };
   
    

    return (
        <>
            {showPopUp && <ApprovedPopup name={companyName} operation="Warehouse Added" onApprovalClick={() => { setShowPopUp(false); setActiveItem('My Warehouses') }} />}
            <ToastContainer />
            <h2 className="text-lg font-semibold leading-7 text-gray-900 pl-11 py-11">
                ADMIN INPUT - WAREHOUSE
            </h2>
            <GuiMap />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >{ (formik) => (
                <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
                    <CompanyDetails />
                    <Address />
                    <AdminInputWarehouseDetail />
                    <div className="flex col-span-full justify-end">

                        <button
                            type='submit'
                            className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4 w-26"
                        >
                            Send for Approval
                        </button>
                    </div>
                </Form>
            )
}
            </Formik>
        </>
    );
}

export default AdminInputWarehouse;
