import { InboxStackIcon, MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import MenuListing1 from "./MenuListing1";
import MenuListing3 from "./MenuListing3";

interface DashboardProps {}


const tags = [
    { id: 'all', name: 'All', href: '#', initial: 'A', color: 'bg-white', current: false },
    { id: 'red', name: 'Red', href: '#', initial: 'R', color: 'bg-rose-600', current: false },
    { id: 'blue', name: 'Blue', href: '#', initial: 'B', color: 'bg-sky-600', current: false },
    { id: 'green', name: 'Green', href: '#', initial: 'G', color: 'bg-green-600', current: false },
  ];
  
  const mails = [
    { id: 'main', name: 'Main', href: '#', icon: InboxStackIcon, current: false },
    { id: 'trash', name: 'Trash', href: '#', icon: TrashIcon, current: false },
  ];





const Mail  = () => {
    return (        <aside className="fixed inset-y-0 left-72 hidden w-60 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block list-none">
    <MenuListing1 navArray={mails} title="mailboxes" />
    <MenuListing3 navArray={tags} title="Tags" />
  </aside>)
}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <>
      <form className="relative flex w-full flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block h-12 w-full shadow-md border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
    </>
  );
};

export default Dashboard;
