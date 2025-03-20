import { ColumnDef } from '@tanstack/react-table'


import { Checkbox } from '@/components/ui/checkbox'


export const columns: ColumnDef<unknown>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: 'id',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Exception Id" />
  //   ),
  //   cell: ({ row }) => <div className="w-[100px]">{row.getValue('id')}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: 'dateDue',
    header: "Date Due",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium ">
            {row.getValue('dateDue')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'description',
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium ">
            {row.getValue('description')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'assignedTo',
    header: "AssignedTo",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium ">
            {row.getValue('assignedTo')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('status')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'dateCreated',
    header: "Date Created",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('dateCreated')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'meeting',
    header: "Meeting",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('meeting')}
          </span>
        </div>
      )
    },
  },
]
