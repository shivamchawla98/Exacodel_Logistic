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
    const {identification} = useSelector((state: any) => state.starterSlice)
    console.log(identification);
    
    
    const {formName} = useSelector((state):any => state.selectForm);
    return (
        <div className=''>
        { formName === 'otp' && <OtpVerification />}
        {formName === 'passCreation' && <PasswordCreation />}
        { formName === 'registration' && identification === 'customer' && <CustomerRegistrationForm />}
        { formName === 'registration' && identification === 'vendor' && <VendorRegistrationForm />}
        { formName === 'registration' && identification === 'overseas' && <OverseasRegistrationForm />}
        </div>
    )
}

export default Page
