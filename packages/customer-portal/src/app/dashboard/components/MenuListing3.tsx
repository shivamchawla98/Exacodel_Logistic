function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
  }

const MenuListing3 = ({ navArray, title }: any) => {
  return (
    <>
      <div className="text-xs font-semibold leading-6 text-gray-400 pt-5">
        {title}
      </div>
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {navArray.map((nav: any) => (
          <li key={nav.name}>
            <a
              href={nav.href}
              className={classNames(
                nav.current
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <span
                className={classNames(
                  nav.current
                    ? "text-indigo-600 border-indigo-600"
                    : "text-gray-600 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                  `flex h-6 w-6 text-gray-600 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium  ${nav.color}`
                )}
              >
                {nav.initial}
              </span>
              <span className="truncate">{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuListing3;
