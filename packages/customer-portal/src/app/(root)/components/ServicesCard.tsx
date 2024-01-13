"use client";

function ServicesCard({ icons, title }: any) {
  return (
    <div className=" p-6 mt-8 max-w-xs bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 h-52">
      <div className="flex-center ">
        <div className="bg-slate-200 flex justify-center items-center w-12 h-12 rounded">
          {icons}
        </div>
        <a href="#" className="w-30 mr-8 mt-2 ml-2">
          <h5 className="mb-2 text-base base-bold text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
      </div>
      <hr className="my-5 h-0.5 border-t-0 bg-fuchsia-100 opacity-100 dark:opacity-50" />
      <p className="mb-3 base-regular text-gray-500 dark:text-gray-400 divide-y divide-gray-400 ">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  );
}

export default ServicesCard;
