'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Address from './Address';
import SelectComponet from './SelectComponent';
import TextField from './TextField';
import AdminInputWarehouseDetail from './WarehouseDetails';
import CompanyDetails from './CompanyDetails';

const validationSchema = Yup.object({
    billingAddress: Yup.string(),
});

function AdminInputWarehouse() {
    const handleSubmit = (values: any) => {
        // Handle form submission
        console.log(values);
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
        typeOfWarehoue: '',
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
