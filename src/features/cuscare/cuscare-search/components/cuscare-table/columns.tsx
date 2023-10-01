import { ColumnDef } from "@tanstack/react-table"

import { Task } from "./__mock__/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import {Link} from "react-router-dom";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "localType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Loại dịch vụ" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("localType")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "contract",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Số hợp đồng" />
    ),
    cell: ({ row }) => (
        <div className="w-[70px] text-center underline text-primary">
          <Link to={'/detail'}>{row.getValue("contract")}</Link>
        </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Số điện thoại" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("phone")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dateAssign",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Ngày PC" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("dateAssign")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "agent",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nhân viên được phân công" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("agent")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "saleBy",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Nhân viên đã tư vấn" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("saleBy")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "saleDate",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Ngày tư vấn" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("saleDate")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "totalCall",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Số lần tư vấn" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("totalCall")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "result",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Kết quả" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("result")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dateResult",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Ngày hoàn tất CL" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center">{row.getValue("dateResult")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "dateEnd",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Ngày hoàn tất triển khai HDBox" />
    ),
    cell: ({ row }) => <div className="w-full">{row.getValue("dateEnd")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Ghi chú" />
    ),
    cell: ({ row }) => <div className="w-[70px] text-center truncate">{row.getValue("note")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "area",
    header: () => null,
  },
  {
    accessorKey: "campaign",
    header: () => null,
  },
  {
    accessorKey: "staff",
    header: () => null,
  },
  {
    accessorKey: "upgrade",
    header: () => null,
  },
  {
    accessorKey: "status",
    header: () => null
  },
]