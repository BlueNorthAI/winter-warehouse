import tasks from '@/app/data/columndata/tasks.json'
import { statuses, dot } from '@/app/data/columndata/data';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ResolutionTab from '@/components/incidents/ResolutionTab'
import SnopTab from '@/components/incidents/S&OpTab'


export default async function Page({
    params,
}: {
    params: Promise<{ expId: string }>
}) {

    const expId = (await params).expId
    const exp = tasks.filter((task) => task.id === expId)[0]

    const status = statuses.find((status) => status.value === exp.status)
    if (!status) {
        return null
    }
    const dots = dot.find((d) => d.value === exp.severity)

    if (!dots) {
        return null
    }

    return (

        <div className="bg-white  w-full rounded-lg border mt-2">
            <div className="p-2 flex items-center justify-between">
                <div className="min-w-0">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Exception Summary - {exp.sku}
                    </h1>
                    <h2 className="mt-1 text-base text-gray-600">{exp.title}</h2>
                    <div className="mt-1 flex flex-row flex-wrap space-x-4 sm:mt-0">
                        <div className="mt-2 flex items-center text-sm text-green-700">
                            <div className={`flex items-center ${status.textClr}`}>
                                {status.icon ? (
                                    <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                ) : null}
                                <span className="text-base font-semibold">
                                    {status.label}
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <div className="flex w-[80px] items-center">
                                {dots && (
                                    <svg
                                        className={`${dots.fill} mr-2 h-2 w-2`}
                                        viewBox="0 0 6 6"
                                        aria-hidden="true"
                                    >
                                        <circle cx={3} cy={3} r={3} />
                                    </svg>
                                )}
                                {dots && dots.label ? <span>{dots.label}</span> : null}
                            </div>
                        </div>

                        <div className="mt-2 flex items-center">
                            <Image
                                className="h-5 w-5 rounded-full"

                                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                                width={20}
                                height={20}
                            />


                            <div className="ml-2 text-sm text-gray-500">{exp.owner}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-2">
                <Tabs defaultValue="Resolution" className="tracking-normal">
                    <TabsList className="">
                        <TabsTrigger value="Resolution" className="relative">
                            Resolution
                        </TabsTrigger>
                        <TabsTrigger className="" value="S&OP">
                            Link to S&OP
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="Resolution">
                        <ResolutionTab />
                    </TabsContent>
                    <TabsContent value="S&OP">
                        <SnopTab />

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )

}






