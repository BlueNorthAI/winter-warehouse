import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OrderStatus() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <div className="flex items-center justify-between relative">
                {/* Progress line behind the steps */}
                <div className="absolute h-[2px] bg-green-500 left-0 right-0 top-[22px] -z-10" />

                {/* Status steps */}
                <div className="flex flex-col items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="font-normal bg-white">
                        Ordered
                    </Badge>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="font-normal bg-white whitespace-nowrap">
                        Supplier Dispatched
                    </Badge>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="font-normal bg-white">
                        DC Dispatched
                    </Badge>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                    </div>
                    <Badge variant="outline" className="font-normal bg-white">
                        Store Received
                    </Badge>
                </div>
            </div>
        </div>
    )
}

