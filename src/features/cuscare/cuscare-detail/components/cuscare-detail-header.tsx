import React from "react";
import { Button } from "@/components/ui/Button.tsx";
import { ArrowLeft } from 'lucide-react'
import { cn } from "@/lib/utils.ts";
import Container from "@/components/ui/Container.tsx";
import { useNavigate } from "react-router-dom";
import CuscareDetailSearch from "@/features/cuscare/cuscare-detail/components/cuscare-detail-search.tsx";

const CuscareDetailHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={cn('py-3 border-b static w-full')}>
            <Container>
                <div className={cn('flex justify-between items-center')}>
                    <Button
                        onClick={() => navigate(-1)}
                        >
                        <ArrowLeft className={cn('w-5 h-5 mr-1')} />
                        Back
                    </Button>

                    <CuscareDetailSearch />
                </div>
            </Container>
        </div>
    )
}

export default CuscareDetailHeader;