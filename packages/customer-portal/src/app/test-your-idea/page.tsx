
import StarterForm from '@/components/form components/StarterForm'
import CustomerRegistrationForm from '@/components/form components/CustomerRegistrationForm'
import VendorRegistrationForm from '@/components/form components/VendorRegistrationForm'
import OverseasRegistrationForm from '@/components/form components/OverseasRegistrationForm'
import CustomerProfileUpdate from '@/components/form components/CustomerProfileUpdate'
import VendorProfileUpdate from '@/components/form components/VendorProfileUpdate'
import OverseasAgentProfileUpdate from '@/components/form components/OverseasAgentProfileUpdate'
import SeaFclRateInputByAdmin from '@/components/form components/SeaFclRateInputByAdmin'
import AirRateInputByAdmin from '@/components/form components/AirRateInputByAdmin'
import LCLRateInputByAdmin from '@/components/form components/LCLRateInputByAdmin'
import AirDomesticRateInputByAdmin from '@/components/form components/AirDomesticRateInputByAdmin'
import CustomClearenceFCLAdminInput from '@/components/form components/CustomClearenceFCLAdminInput'
import CustomClearenceBrockerageAirByAdmin from '@/components/form components/CustomClearenceBrockerageAirByAdmin'
import CustomClearenceBrockerageLCLByAdmin from '@/components/form components/CustomClearenceBrockerageLCLByAdmin'
import AdminInputWarehouse from '@/components/form components/AdminInputWarehouse'
import AdminInputDomesticTransport from '@/components/form components/AdminInputDomesticTransport'
import AdminInputOverseasTransport from '@/components/form components/AdminInputOverseasTransport'



function page() {
  return (
    <>
     {/* <StarterForm /> */}
    {/* <CustomerRegistrationForm /> */}
    {/* <VendorRegistrationForm /> */}
    {/* <OverseasRegistrationForm /> */}
    {/* <CustomerProfileUpdate /> */}
    <VendorProfileUpdate /> 
    {/* <OverseasAgentProfileUpdate />  */}

    {/* Downward forms are refactored  */}
    
    {/* <SeaFclRateInputByAdmin /> */}
    {/* <AirRateInputByAdmin /> */}
    {/* <LCLRateInputByAdmin /> */}
    {/* <AirDomesticRateInputByAdmin /> */}
    {/* <CustomClearenceFCLAdminInput /> */}
    {/* <CustomClearenceBrockerageAirByAdmin /> */}
    {/* <CustomClearenceBrockerageLCLByAdmin /> */}
    {/* <AdminInputWarehouse /> */}
    {/* <AdminInputDomesticTransport /> */}
    {/* <AdminInputOverseasTransport /> */}
    </>
  )
}

export default page