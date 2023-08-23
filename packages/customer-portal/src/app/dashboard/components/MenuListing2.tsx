function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }


const MenuListing2 = ({ navArray, title }) => {
    return (
      <li>
        <div className="text-xs font-semibold leading-6 text-gray-400">
          {title}
        </div>
        <ul role="list" className="-mx-2 mt-2 space-y-1">
          {navArray.map((nav) => (
            <li key={nav.name}>
              <a
                href={nav.href}
                className={classNames(
                  nav.current
                    ? 'bg-gray-50 text-sky-600'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                )}
              >
                <span
                  className={classNames(
                    nav.current
                      ? 'text-sky-600 border-sky-600'
                      : 'text-gray-400 border-gray-200 group-hover:border-sky-600 group-hover:text-sky-600',
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                  )}
                >
                  {nav.initial}
                </span>
                <span className="truncate">{nav.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

export default MenuListing2;