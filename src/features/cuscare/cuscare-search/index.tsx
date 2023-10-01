import { z } from "zod"

import { columns } from "./components/cuscare-table/columns"
import { DataTable } from "./components/cuscare-table/data-table"
import { taskSchema } from "./components/cuscare-table/__mock__/schema.ts"
import React, {useEffect, useState} from "react";
import { taskMock } from "./components/cuscare-table/__mock__/tasks.ts";
import Container from "@/components/ui/Container.tsx";

// Simulate a database read for tasks.
async function getTasks() {
    return z.array(taskSchema).parse(taskMock)
}

export interface TaskModel {
    id: string,
    localType: string,
    contract: string,
    phone: string,
    dateAssign: string,
    agent: string,
    saleBy: string,
    saleDate: string,
    totalCall: string,
    result: string,
    dateResult: string,
    dateEnd: string,
    note: string,
}

const CuscareSearchFeature: React.FC = () => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    useEffect(() => {
        getTasks()
            .then((res ) => {
                setTasks(res);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    return (
        <Container>
            <div className="h-full flex-1 flex-col space-y-4 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">TƯ VẤN TELESALES</h2>
                    </div>
                </div>
                <DataTable data={tasks} columns={columns} />
            </div>
        </Container>
    )
}

export default CuscareSearchFeature;