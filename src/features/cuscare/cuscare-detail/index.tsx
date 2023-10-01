import React from "react";
import CuscareDetailHeader from "@/features/cuscare/cuscare-detail/components/cuscare-detail-header.tsx";
import CuscareDetailOverview from "@/features/cuscare/cuscare-detail/components/cuscare-detail-overview.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/Tabs";
import {cn} from "@/lib/utils.ts";
import Container from "@/components/ui/Container.tsx";
import {ScrollArea} from "@/components/ui/ScrollArea.tsx";
import {Button} from "@/components/ui/Button.tsx";
import { ConstructionIcon } from 'lucide-react'

const supports = [
    {
        title: 'Thông số kỹ thuật'
    },
    {
        title: 'Last Access Errors'
    },
    {
        title: 'Online Connections'
    },
    {
        title: 'Các lần kết nối'
    },
    {
        title: 'Checklist bảo trì'
    },
    {
        title: 'Checklist bảo trì IPTV'
    },
    {
        title: 'Liệt kê cước phí'
    },
    {
        title: 'Cước IPTV'
    },
    {
        title: 'Cước Invoice'
    },
    {
        title: 'Tra cứu gọi tổng đài'
    },
    {
        title: 'Invoice'
    },
    {
        title: 'IPTV'
    },
]

const CuscareDetail: React.FC = () => {
    return (
        <>
            <CuscareDetailHeader />
            <Container>
                <Tabs defaultValue="CuscareInfo" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mt-3">
                        <TabsTrigger value="CuscareInfo">Thông tin tư vấn</TabsTrigger>
                        <TabsTrigger value="SupportInfo">Thông tin hỗ trợ</TabsTrigger>
                    </TabsList>
                    <TabsContent value="CuscareInfo" className={cn('w-full')}>
                        <CuscareDetailOverview/>
                        <div className={cn('my-4 p-4 rounded-lg border shadow space-y-1')}>
                            <div className={cn('flex items-center space-x-2')}>
                                <ConstructionIcon />
                                <p>Đang tiếp tục phát triển...</p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="SupportInfo">
                        <div className={cn('flex justify-between space-x-3')}>
                            <ScrollArea className="w-1/4 px-1 rounded-md border">
                                <div className="space-y-1 p-2">
                                    {
                                        supports.map((support, index) => (
                                            <Button
                                                key={index}
                                                variant="ghost"
                                                className={cn('w-full justify-start font-normal', index == 0 ? 'bg-primary text-white' : '')}
                                            >
                                                {support.title}
                                            </Button>
                                        ))
                                    }

                                </div>
                            </ScrollArea>

                            <div className={cn('w-full max-h-full px-1 rounded-md border px-6 py-3')}>
                                <p>Chưa có thông tin</p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </Container>
        </>
    )
}

export default CuscareDetail;