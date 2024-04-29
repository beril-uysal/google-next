'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
        const router = useRouter()
        const searchParams = useSearchParams()
        const searchTerms = searchParams.get('searchTerm')
        const pathname = usePathname()
        const selectTab = (tab: string) => {
            router.push(`/search/${tab === 'Images' ? 'image' : 'web'}/?searchTerm=${searchTerms}`) 
        }
    return (
        <div className='flex items-center space-x-2 select-none border-b w-full 
        justify-center lg:justify-start lg:pl-52 text-ray-700 text-sm'>
            <div onClick={()=> selectTab('All')} className={`flex items-center space-x-1 border-b-4 border-transparent
             active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ==='/search/web' && '!text-blue-600 !border-blue-600'}`}>
                <AiOutlineSearch className='text-md'/>
                <p>All</p>
            </div>
            <div onClick={()=> selectTab('Images')} className={`flex items-center space-x-1 border-b-4 border-transparent
             active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname ==='/search/image' && '!text-blue-600 !border-blue-600'}`}>
                <AiOutlineCamera className='text-md'/>
                <p>Images</p>
            </div>
            
        </div>
    )
}