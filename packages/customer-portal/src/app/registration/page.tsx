
import StarterForm from '@/components/form components/StarterForm';
import VendorRegistrationForm from '@/components/form components/VendorRegistrationForm';
import { useSelector} from 'react-redux';

// const Registration = () => {

//     )
// }

function Page() {
    // const {formName} = useSelector((state):any => state.selectForm);
    return (
        <>
        <StarterForm />
        <VendorRegistrationForm />
        </>
    )
}

export default Page