"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

import {areas, campaigns, localTypes, staffs, statuses, upgrades} from "./__mock__/data.tsx"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import {cn} from "@/lib/utils.ts";
import {
    DatePickerWithRange
} from "@/features/cuscare/cuscare-search/components/cuscare-table/data-table-date-picker.tsx";

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-1 items-center">
          <Input
              placeholder="Nhập số hợp đồng..."
              value={(table.getColumn("contract")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                  table.getColumn("contract")?.setFilterValue(event.target.value)
              }
              className="h-12 w-full text-lg mr-2"
          />
          <DatePickerWithRange/>
      </div>
      <div className={cn('flex flex-1')}>
          <div className={cn('w-full space-y-1.5')}>
              {table.getColumn("area") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("area")}
                      title="Khu vực"
                      options={areas}
                  />
              )}
              {table.getColumn("campaign") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("campaign")}
                      title="Chiến dịch"
                      options={campaigns}
                  />
              )}
              {table.getColumn("localType") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("localType")}
                      title="Loại dịch vụ"
                      options={localTypes}
                  />
              )}
              {table.getColumn("staff") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("staff")}
                      title="Nhân viên"
                      options={staffs}
                  />
              )}
              {table.getColumn("upgrade") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("upgrade")}
                      title="Kết quả tư vấn"
                      options={upgrades}
                  />
              )}
              {table.getColumn("status") && (
                  <DataTableFacetedFilter
                      column={table.getColumn("status")}
                      title="Trạng thái"
                      options={statuses}
                  />
              )}
              {isFiltered && (
                  <Button
                      variant="ghost"
                      onClick={() => table.resetColumnFilters()}
                      className="h-8 px-3"
                  >
                      Reset
                      <Cross2Icon className="ml-2 h-4 w-4" />
                  </Button>
              )}
          </div>
      </div>
    </div>
  )
}
