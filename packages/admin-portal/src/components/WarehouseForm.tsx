'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Address from './Address';

import AdminInputWarehouseDetail from './WarehouseDetails';
import CompanyDetails from './CompanyDetails';
import { useMutation } from '@apollo/client';
import ApprovedPopup from '@/app/approval/components/ApprovedPopup';
import { useState } from 'react';
import CREATE_WAREHOUSE from '@/graphql/mutation/createWarehouse';



const validationSchema = Yup.object({
    billingAddress: Yup.string(),
});

function AdminInputWarehouse({ setActiveItem }: any) {

    const [createWarehouse, { data, error }] = useMutation(CREATE_WAREHOUSE);
    const [companyName, setCompanyName] = useState('')
    const [showPopUp, setShowPopUp] = useState(false)


    const handleSubmit = (values: any) => {
        // Handle form submission
        setCompanyName(values.companyName)
        console.log(values.region);
        try {
            createWarehouse({
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
                        "minimumStorageRent": `${values.minimumStorageRentPerSqFt}`,
                        "minimumStorageCharges_per_pallet": `${values.minimumStorageChargesPerPallet}`,
                        "minimumStorageArea": `${values.minimumStorageAreaPerSqFt}`,
                        "minimumstorageArea_per_pallet": `${values.minimumStorageAreaPerPallet}`,
                        "storageCharges": `${values.storageChargesPerSqFt}`,
                        "storageCharges_per_pallet": `${values.storageChargesPerPallet}`,
                        "hazardousStorageType": `${values.hazardousStorageCapacity}`,
                        "temperatureType": `${values.activePassive}`,
                        "temperatureCapacity": `${values.temperatureCapacity}`
                    }
                }
            })
            setShowPopUp(true)
        } catch (error) {
            console.log("errror found : ", error);

        }

    };


    // initial values
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

    return (
        <>
            {showPopUp && <ApprovedPopup name={companyName} operation="Warehouse Added" onApprovalClick={() => { setShowPopUp(false); setActiveItem('All warehouses') }} />}
            <h2 className="text-lg font-semibold leading-7 text-gray-900 pl-11 pt-11">
                ADMIN INPUT - WAREHOUSE
            </h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="mt-2 grid lg:grid-cols-3 gap-6 p-12 gap-y-8">
                    <CompanyDetails />
                    <Address />
                    <AdminInputWarehouseDetail />
                    <div className="flex col-span-full justify-end">

                        <button
                            type='submit'
                            className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4 w-20"
                        >
                            save
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default AdminInputWarehouse;
