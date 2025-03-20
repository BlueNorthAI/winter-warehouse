'use client'
import React from 'react'

import { columns } from '@/features/trackTrace/components/columns-inci'
import { DataTable } from '@/components/data-table'
import taskData from '@/features/trackTrace/components/tasks.json'





export default function TrackTrace() {
  return (
    <div>

        <div className=" bg-white rounded-lg">
          <DataTable data={taskData} columns={columns} filterKey={''} onDelete={() => { }} />
        </div>
      </div>

  )
}