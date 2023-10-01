import React from "react";
import {cn} from "@/lib/utils.ts";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem
} from "@/components/ui/Select";
import {Separator} from "@/components/ui/Separator.tsx";
import {Input} from "@/components/ui/Input.tsx";
import { Contact2, User2, PhoneIcon } from 'lucide-react'

const CuscareDetailOverview: React.FC = () => {
    return (
        <div className={cn('my-4 pt-4 pr-6 rounded-lg border shadow space-y-1')}>
            <div className={cn('flex justify-between')}>
                <div className={cn('py-2 px-5 items-center space-y-2')}>
                    <div className={cn('flex')}>
                        <Contact2 strokeWidth={2} size={32} className={cn('mr-2 text-primary')} />
                        <h1 className={cn('text-2xl font-bold text-primary')}>SG123456</h1>
                    </div>
                    <div className={cn('flex items-center')}>
                        <User2 strokeWidth={2} size={32} className={cn('h-9 h-9 mr-2')}/>
                        <h1 className={cn('text-2xl font-medium')}>Trần Tuấn Nam</h1>
                    </div>
                    <div  className={cn('flex items-center')}>
                        <PhoneIcon strokeWidth={2} size={32} className={cn('h-9 h-9 mr-2')}/>
                        <p className={cn('font-medium')}>0394453616</p>
                    </div>
                </div>

                <div className={cn('flex flex-col items-end space-y-3')}>
                    <p className={cn('text-xl font-medium border border-dashed rounded-lg border-primary text-primary py-1 px-3')}>Order Tracking</p>
                    <div className={cn('flex space-x-1')}>
                        <div className={'h-10 w-32 bg-primary flex flex-col text-white items-center justify-center text-xs rounded-l-2xl'}>
                            <p>Chưa tư vấn</p>
                        </div>
                        <div className={'h-10 w-32 bg-gray-400 flex flex-col text-white items-center justify-center text-xs'}>
                            <p>Chưa thanh toán</p>
                        </div>
                        <div className={'h-10 w-32 bg-gray-400 flex flex-col text-white items-center justify-center text-xs'}>
                            <p>KH chưa xác nhận</p>
                        </div>
                        <div className={'h-10 w-32 bg-gray-400 flex flex-col text-white items-center justify-center text-xs'}>
                            <p>Chờ triển khai</p>
                        </div>
                        <div className={'h-10 w-32 bg-gray-400 flex flex-col text-white items-center justify-center text-xs'}>
                            <p>Chờ duyệt</p>
                        </div>
                        <div className={'h-10 w-32 bg-gray-400 flex flex-col text-white items-center justify-center text-xs rounded-r-2xl'}>
                            <p>Xuất hoá đơn</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={cn('py-4 px-5')}>
                <div className={cn('h-24 flex flex-1 justify-between items-center')}>
                    <div className={cn('space-y-1')}>
                        <p className={cn('text-sm font-medium text-primary')}>Kết quả tư vấn</p>
                        <Select value={"0"}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Kết quả tư vấn" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="0">Chưa tư vấn</SelectItem>
                                    <SelectItem value="1">Đồng ý</SelectItem>
                                    <SelectItem value="12">Suy nghĩ lại</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={cn('space-y-1')}>
                        <p className={cn('text-sm font-medium text-primary')}>Kênh bán hàng</p>
                        <Input placeholder={'W-Sale'} readOnly={true} />
                    </div>
                    <Separator orientation="vertical" />
                    <div className={cn('space-y-1')}>
                        <p className={cn('text-sm font-medium text-primary')}>Đơn vị bán</p>
                        <Input placeholder={'Telesales'} readOnly={true} />
                    </div>
                    <Separator orientation="vertical" />
                    <div className={cn('space-y-1')}>
                        <p className={cn('text-sm font-medium text-primary')}>Loại khách hàng</p>
                        <Input placeholder={'Gia đình/ Hộ gia đình'} readOnly={true} />
                    </div>
                    <Separator orientation="vertical" />
                    <div className={cn('space-y-1')}>
                        <p className={cn('text-sm font-medium text-primary')}>Đối tượng KH</p>
                        <Input placeholder={'Đối tượng khác'} readOnly={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuscareDetailOverview;