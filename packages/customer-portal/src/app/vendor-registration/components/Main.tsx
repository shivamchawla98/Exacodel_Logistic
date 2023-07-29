import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import CompanyBasicInfo from './CompanyBasicInfo';
import CompanyStatus from './CompanyStatus';
import Addresses from './Addresses';
import Contact from './Contact';
import UploadForm from './UploadForm';
import CustomClearenceFCLAdminInput from '@/components/form components/CustomClearenceFCLAdminInput';

export default function Main({ showForm }) {
  let componentToShow;

  switch (showForm) {
    case 1:
      componentToShow = <CompanyBasicInfo />;
      break;
    case 2:
      componentToShow = <CompanyStatus />;
      break;
    case 3:
      componentToShow = <Addresses />;
      break;
    case 4:
      componentToShow = <Contact />;
      break;
    case 5:
      componentToShow = <UploadForm />;
      break;
    case 6:
      componentToShow = <CustomClearenceFCLAdminInput />;
      break;

    default:
      componentToShow = null;
  }

  return <>{componentToShow}</>;
}
