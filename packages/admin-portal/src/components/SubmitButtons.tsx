function SubmitButtons({id1, title1, id2, title2}: any) {
    return (
      <>
        {/* buttons */}
        <div className="col-span-full flex justify-end mt-6">
          <button
            type="button"
            name={id1}
            id={id1}
            className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4"
          >
            {title1}
          </button>
          <button
            type="button"
            id={id2}
            name={id2}
            className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4"
          >
            {title2}
          </button>
        </div>
      </>
    );
  }
  
  export default SubmitButtons;
  