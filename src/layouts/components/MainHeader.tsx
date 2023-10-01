import React from "react";
import { BellIcon } from '@radix-ui/react-icons';
import { cn } from "@/lib/utils.ts";
import Container from "@/components/ui/Container.tsx";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/Tooltip.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar.tsx";
import { LayoutDashboardIcon, PhoneIcon, CircleDollarSignIcon } from 'lucide-react'
import { Link } from "react-router-dom";
import logo from '@/assets/logo/FPT_Telecom_logo.svg'

const MainHeader :React.FC = () => {
    const accountInsideLogged: string = 'DienNX3';
    const avatarURL: string = `https://ui-avatars.com/api/?format=svg&size=128&bold=true&name=${accountInsideLogged}`;

    return (
        <header className={cn('py-3 border-b')}>
            <Container>
                <div className={cn('flex justify-between items-center')}>
                    <img src={logo} className={cn('w-32')} alt="FPT Telecom"/>
                    <nav className={cn('mx-6 flex items-center space-x-12')}>
                        <Link to={'/'} className={cn('flex space-x-2 hover:text-primary')}>
                            <LayoutDashboardIcon/>
                            <span className={'font-medium'}>Trang chủ</span>
                        </Link>
                        <Link to={'/'} className={cn('flex space-x-2 hover:text-primary')}>
                            <PhoneIcon/>
                            <span className={'font-medium'}>Tư vấn</span>
                        </Link>
                        <Link to={'/'} className={cn('flex space-x-2 hover:text-primary')}>
                            <CircleDollarSignIcon/>
                            <span className={'font-medium'}>Thu nhập</span>
                        </Link>
                    </nav>
                    <div className={cn('flex items-center space-x-2')}>
                        <BellIcon className={cn('h-5 w-5 cursor-pointer')} />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Avatar>
                                        <AvatarImage src={avatarURL}></AvatarImage>
                                        <AvatarFallback>{accountInsideLogged}</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{accountInsideLogged}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default MainHeader;