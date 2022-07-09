/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from "@heroicons/react/solid";
import { IoNewspaperOutline } from "react-icons/io5";
export default function EmptyState({ stateName }) {
  return (
    <div className="text-center mt-4">
      <IoNewspaperOutline className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">No {stateName}</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new one.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New {stateName}
        </button>
      </div>
    </div>
  );
}
