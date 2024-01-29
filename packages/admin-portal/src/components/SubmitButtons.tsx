function SubmitButtons({ id1, title1 }: any) {
  return (
    <>
      {/* buttons */}
      <div className="col-span-full flex justify-end mt-6">
        <button
          type="submit"
          name={id1}
          id={id1}
          className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ml-4"
        >
          {title1}
        </button>
      </div>
    </>
  );
}

export default SubmitButtons;
