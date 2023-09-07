'use client'
import StarterForm from '@/components/form components/StarterForm';
import VendorRegistrationForm from '@/components/form components/VendorRegistrationForm';
import { useSelector, useDispatch} from 'react-redux';

// const Registration = () => {

//     )
// }

function Page() {
    // const {value} = useSelector((state) => state.counter);
    const {formName} = useSelector((state: any) => state.selectForm)
    console.log(formName)
    
    // const {formName} = useSelector((state):any => state.selectForm);
    return (
        <>
        {formName === 'starterForm' && <StarterForm />}
        {formName === 'I am a Vendor' && <VendorRegistrationForm />}
        </>
    )
}

export default Page
