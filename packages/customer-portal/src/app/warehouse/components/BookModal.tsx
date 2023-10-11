import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookModal = ({ isOpen, closeModal }: any) => {
  const initialValues = {
    warehouseType: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    country: '',
    totalStorageArea: '',
    totalAvailableArea: '',
    occupiedSpace: '',
    unoccupiedSpace: '',
    rackedSpace: '',
    warehouseInsurance: '',
  };

  const validationSchema = Yup.object().shape({
    warehouseType: Yup.string().required('Type of Warehouse is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.string()
      .required('Pincode is required')
      .matches(/^[0-9]{6}$/, 'Invalid pincode format. Must be 6 digits.'),
    country: Yup.string().required('Country is required'),
    totalStorageArea: Yup.number().required('Total Storage Area is required').min(0),
    totalAvailableArea: Yup.number().required('Total Available Area is required').min(0),
    occupiedSpace: Yup.number().required('Occupied Space is required').min(0),
    unoccupiedSpace: Yup.number().required('Unoccupied Space is required').min(0),
    rackedSpace: Yup.number().required('Racked Space is required').min(0),
    warehouseInsurance: Yup.string().required('Warehouse Insurance is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log('Form values:', values);
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={`fixed inset-0 z-50 overflow-auto ${isOpen ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="bg-white w-full md:w-1/2 lg:w-11/12 lg:px-16 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold mb-4 col-span-2 md:col-span-3 lg:col-span-3">Warehouse Details</h2>
                <div className="mb-4">
                  <label htmlFor="warehouseType" className="block font-semibold text-gray-700 mb-2">
                    Type of Warehouse
                  </label>
                  <Field
                    type="text"
                    id="warehouseType"
                    name="warehouseType"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.warehouseType && touched.warehouseType
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="warehouseType"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.address && touched.address ? 'focus:ring-red-400' : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="state" className="block font-semibold text-gray-700 mb-2">
                    State
                  </label>
                  <Field
                    type="text"
                    id="state"
                    name="state"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.state && touched.state ? 'focus:ring-red-400' : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <Field
                    type="text"
                    id="city"
                    name="city"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.city && touched.city ? 'focus:ring-red-400' : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pincode" className="block font-semibold text-gray-700 mb-2">
                    Pincode
                  </label>
                  <Field
                    type="text"
                    id="pincode"
                    name="pincode"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.pincode && touched.pincode
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="pincode"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block font-semibold text-gray-700 mb-2">
                    Country
                  </label>
                  <Field
                    type="text"
                    id="country"
                    name="country"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.country && touched.country
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="totalStorageArea" className="block font-semibold text-gray-700 mb-2">
                    Total Storage Area (sq feet)
                  </label>
                  <Field
                    type="text"
                    id="totalStorageArea"
                    name="totalStorageArea"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.totalStorageArea && touched.totalStorageArea
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="totalStorageArea"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="totalAvailableArea" className="block font-semibold text-gray-700 mb-2">
                    Total Available Area (sq feet)
                  </label>
                  <Field
                    type="text"
                    id="totalAvailableArea"
                    name="totalAvailableArea"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.totalAvailableArea && touched.totalAvailableArea
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="totalAvailableArea"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="occupiedSpace" className="block font-semibold text-gray-700 mb-2">
                    Occupied Space (sq feet)
                  </label>
                  <Field
                    type="text"
                    id="occupiedSpace"
                    name="occupiedSpace"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.occupiedSpace && touched.occupiedSpace
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="occupiedSpace"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="unoccupiedSpace" className="block font-semibold text-gray-700 mb-2">
                    Unoccupied Space (sq feet)
                  </label>
                  <Field
                    type="text"
                    id="unoccupiedSpace"
                    name="unoccupiedSpace"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.unoccupiedSpace && touched.unoccupiedSpace
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="unoccupiedSpace"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rackedSpace" className="block font-semibold text-gray-700 mb-2">
                    Racked Space (sq feet)
                  </label>
                  <Field
                    type="text"
                    id="rackedSpace"
                    name="rackedSpace"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.rackedSpace && touched.rackedSpace
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  />
                  <ErrorMessage
                    name="rackedSpace"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="warehouseInsurance" className="block font-semibold text-gray-700 mb-2">
                    Warehouse Insurance
                  </label>
                  <Field
                    as="select"
                    id="warehouseInsurance"
                    name="warehouseInsurance"
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring ${
                      errors.warehouseInsurance && touched.warehouseInsurance
                        ? 'focus:ring-red-400'
                        : 'focus:ring-sky-400'
                    }`}
                  >
                    <option value="" disabled>
                      Select Warehouse Insurance
                    </option>
                    <option value="insurance1">Insurance 1</option>
                    <option value="insurance2">Insurance 2</option>
                  </Field>
                  <ErrorMessage
                    name="warehouseInsurance"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="items-end flex justify-end w-full col-span-2">
                  <button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookModal;
