function SubmitButtons({id1, title1, id2, title2}: any) {
  return (
    <>
      {/* buttons */}
      <div className="col-span-3">
        <button
          type="button"
          name={id1}
          id={id1}
          className="mt-8 mr-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {title1}
        </button>
        <button
          type="button"
          id={id2}
          name={id2}
          className="mt-8 rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {title2}
        </button>
      </div>
    </>
  );
}

export default SubmitButtons;
