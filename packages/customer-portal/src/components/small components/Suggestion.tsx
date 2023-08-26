function Suggestion({name, country, clickHandler}: any) {
  return (
    <div className="cursor-pointer py-2 px-3 hover:bg-slate-100">
      <p className="text-sm font-medium text-gray-600">{name}</p>
      <p className="text-sm text-gray-500">
        {country}
      </p>
    </div>
  );
}

export default Suggestion;
