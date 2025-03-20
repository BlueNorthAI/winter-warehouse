import { FaUserCircle } from "react-icons/fa";
import { CardTitle } from "@/components/ui/card";

export default function Resolution() {
  return (
    <div>
      <CardTitle className="px-2 py-6 text-xl text-blue-900">
        Resolution
      </CardTitle>

      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <div className="flex items-center justify-center px-2 py-4 h-40 border border-gray-300 rounded-md">
            No Action Required
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 border bg-gray-100 rounded-md p-2">
            <FaUserCircle className="w-4 h-4" />
            NEO
          </div>
        </div>

        <div className="">
          <div className="px-2 py-4 h-40 border border-gray-300 rounded-md">
            <p className="text-center py-2">Shipment 3411-3</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              Cost:{" "}
              <span className="font-bold px-2 text-white bg-red-500 rounded-lg text-center">
                $5,150
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              Gain:{" "}
              <span className="font-bold px-2 text-white bg-green-500 rounded-lg text-center">
                $3,650
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 m-2 border bg-gray-100 rounded-md p-2">
            <FaUserCircle className="w-4 h-4" />
            NEO
          </div>
        </div>

        <div className="">
          <div className="px-2 py-4 h-40 border border-gray-300 rounded-md">
            <p className="text-center py-2">Site 3422, + 1 Day</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              Cost:{" "}
              <span className="font-bold px-2 text-white bg-red-500 rounded-lg text-center">
                $8,350
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              Gain:{" "}
              <span className="font-bold px-2 text-white bg-green-500 rounded-lg text-center">
                $1,800
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 m-2 border bg-gray-100 rounded-md p-2">
            <FaUserCircle className="w-4 h-4" />
            NEO
          </div>
        </div>
      </div>
    </div>
  );
}
