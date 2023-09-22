import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import CompanyBasicInfo from './CompanyBasicInfo';
import CompanyStatus from './CompanyStatus';
import Addresses from './Addresses';
import Contact from './Contact';
import UploadForm from './UploadForm';
import CustomClearenceFCLAdminInput from '@/components/form components/CustomClearenceFCLAdminInput';
// import VendorProfileUpdate from '@/components/form components/VendorProfileUpdate';

export default function Main({ showForm }: any) {
  let componentToShow;

  switch (showForm) {
    case 1:
      componentToShow = <CompanyBasicInfo />;
      break;
    case 2:
      // componentToShow = <VendorProfileUpdate />
      break;

    default:
      componentToShow = null;
  }

  return <>{componentToShow}</>;
}
