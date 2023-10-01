import React from "react";
import {Button} from "@/components/ui/Button.tsx";
import {cn} from "@/lib/utils.ts";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/Command.tsx";
import {FileIcon} from "@radix-ui/react-icons";
import {useNavigate} from "react-router-dom";

const checklistMocks = [
    {
        Contract: 'SG123456',
        Result: 'Tư vấn thành công',
        PortalID: '357',
        ObjID: '123',
        SaleUpdateDate: null
    },
    {
        Contract: 'SG482012',
        Result: 'Không liên lạc được - Chưa tư vấn',
        PortalID: '756',
        ObjID: '234',
        SaleUpdateDate: null
    },
    {
        Contract: 'HN122032',
        Result: 'Suy nghĩ lại',
        PortalID: '957',
        ObjID: '347',
        SaleUpdateDate: '31/12/2023 - 03:00 PM'
    },
    {
        Contract: 'SG031256',
        Result: 'Chưa tư vấn',
        PortalID: '246',
        ObjID: '456',
        SaleUpdateDate: null
    },
    {
        Contract: 'SG0302615',
        Result: 'Chưa tư vấn',
        PortalID: '32156',
        ObjID: '32015',
        SaleUpdateDate: null
    },
    {
        Contract: 'DN953172',
        Result: 'Chưa tư vấn',
        PortalID: '6531',
        ObjID: '452369',
        SaleUpdateDate: null
    }
]

const CuscareDetailSearch: React.FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="inline-flex">Tìm kiếm hợp đồng...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-sm font-bold">CTRL+K</span>
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Nhập số hợp đồng..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Hợp đồng">
                        {checklistMocks
                            .filter((checklist) => checklist.Contract)
                            .map((checklist) => (
                                <CommandItem
                                    key={checklist.ObjID}
                                    value={checklist.Contract}
                                    onSelect={() => {
                                        runCommand(() => navigate('/detail'))
                                    }}
                                >
                                    <div className={cn('flex justify-between items-center flex-1 h-8')}>
                                        <div className={cn('flex items-center')}>
                                            <FileIcon className="mr-2 h-4 w-4 text-primary" />
                                            <span className={cn('text-primary font-medium text-xl')}>{checklist.Contract}</span>
                                        </div>
                                        <div className={cn('flex flex-col items-end')}>
                                            <span className={cn('font-medium')}>{checklist.Result}</span>
                                            {checklist?.SaleUpdateDate ?? <span>{checklist.SaleUpdateDate}</span>}
                                        </div>
                                    </div>
                                </CommandItem>
                            ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default CuscareDetailSearch;