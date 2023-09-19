'use client'
import StarterForm from '@/components/form components/StarterForm';
import VendorRegistrationForm from '@/components/form components/VendorRegistrationForm';
import CustomerRegistrationForm from '@/components/form components/CustomerRegistrationForm';
import OverseasRegistrationForm from '@/components/form components/OverseasRegistrationForm';
import { useSelector, useDispatch} from 'react-redux';
import RolePopup from '@/components/form components/RolePopup';
import { useState } from 'react';
import OtpVerification from '@/components/form components/OtpVerification';
import PasswordCreation from '@/components/form components/PasswordCreation';

// const Registration = () => {

//     )
// }

function Page() {
    const [open, setOpen] = useState(true)
    
    // const {formName} = useSelector((state: any) => state.selectForm)
    // console.log(formName)
    const userType = useSelector((state: any) => state.starterSlice.userType)
    console.log(userType);
    
    
    // const {formName} = useSelector((state):any => state.selectForm);
    return (
        <>
        {/* <RolePopup />
        <OtpVerification />
        <PasswordCreation /> */}
        <CustomerRegistrationForm />
        {/* {userType === 'starterForm' && <StarterForm />} */}
        {/* {userType === 'vendor' && <VendorRegistrationForm />} */}
        {/* {formName === 'I am a Customer' && <CustomerRegistrationForm />} */}
        {/* {formName === 'I am a Overseas Agent' && <OverseasRegistrationForm />}  */}
        </>
    )
}

export default Page
