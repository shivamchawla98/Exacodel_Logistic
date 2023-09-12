import UploadUnit from "./UploadUnit"

function UploadForm() {
  return (
    <div className="space-y-12">
        <h2 className="text-2xl font-semibold mb-2 text-center my-7">Upload any four validation certificate</h2>
        <UploadUnit title="Upload IEC Code" />
        <UploadUnit title="Upload ISO Certificate " />
        <UploadUnit title="Upload Business Registration Certificate " />
        <UploadUnit title="Upload VAT/GST Registration Certificate " />
        <UploadUnit title="Upload PAN Card " />
        <UploadUnit title="Upload Start Export House " />
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default UploadForm