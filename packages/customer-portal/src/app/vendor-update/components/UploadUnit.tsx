function UploadUnit({title}: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
      <div className="mb-5 text-center">
        <h2 className="text-l font-semibold mb-2">{title}</h2>
        <p className="text-xs text-gray-500">
          File should be of format .pdf, .excel, .png
        </p>
      </div>
      <form
        action="#"
        className="relative w-4/5 h-32 max-w-xs mb-5 bg-gray-100 rounded-lg shadow-inner"
      >
        <input type="file" id="file-upload" className="hidden" />
        <label
          htmlFor="file-upload"
          className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
        >
          <p className="z-10 text-xs font-light text-center text-gray-500">
            Drag &amp; Drop your files here
          </p>
          <svg
            className="z-10 w-8 h-8 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </label>
      </form>
    </div>
  );
}

export default UploadUnit;
