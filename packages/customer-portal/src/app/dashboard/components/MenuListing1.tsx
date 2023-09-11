import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}





const MenuListing1 = ({ navArray, title="" }: any) => {
    return (
      <li>
        {title !== undefined ? (
          <div className="text-xs font-semibold leading-6 text-gray-400">
            {title}
          </div>
        ) : (
          ''
        )}
        <ul role="list" className="-mx-2 space-y-1">
          {navArray.map((item: any) => (
            <li key={item.name} >
              <Link
                id={item.href} 
                href="#"
                className={classNames(
                  item.current
                    ? 'bg-gray-50 text-sky-600'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-sky-600'
                      : 'text-gray-400 group-hover:text-sky-600',
                    'h-6 w-6 shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  export default MenuListing1;