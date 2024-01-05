"use client";
import { Beats } from '@/types/Beats';
import * as Tabs from '@radix-ui/react-tabs';
import BeatsContent from './BeatsContent';
import PurchasesContent from './PurchasesContent';
import UsersContent from './UsersContent';


interface DataProps {
    props: Beats | null
}

export default function AdminContent({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="pt-36 flex items-center justify-center">
            <Tabs.Root className='w-[85%] bg-surface rounded' defaultValue="tab1">
                <Tabs.List className='flex font-bold rounded'>

                    <Tabs.Trigger value='tab1' className='text-blanche flex-1 flex items-center justify-center select-none outline-none text-2xl sm:text-base p-5 sm:p-4 data-[state=active]:text-primary data-[state=active]:focus:relative data-[state=active]:border-b data-[state=active]:border-primary'>Beats</Tabs.Trigger>
                

               
                    <Tabs.Trigger value='tab2' className='text-blanche flex-1 flex items-center justify-center select-none outline-none text-2xl sm:text-base p-5 sm-p-4 data-[state=active]:text-primary data-[state=active]:focus:relative data-[state=active]:border-b data-[state=active]:border-primary'>Users</Tabs.Trigger>
               

               
                    <Tabs.Trigger value='tab3' className='text-blanche flex-1 flex items-center justify-center select-none outline-none text-2xl sm:text-base p-5 sm-p-4 data-[state=active]:text-primary data-[state=active]:focus:relative data-[state=active]:border-b data-[state=active]:border-primary'>Purchases</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value='tab1'>
                    {children}
                </Tabs.Content>
                <Tabs.Content value='tab2'>
                    <UsersContent />
                </Tabs.Content>
                <Tabs.Content value='tab3'>
                    <PurchasesContent />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}