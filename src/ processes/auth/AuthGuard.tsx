'use client'

import { useCurrentQuery } from '@/entities/user/model/userApi'
import { selectCurrent, selectUser, selectisAuthenticated } from '@/entities/user/model/userSlice';
import { Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    
    const router = useRouter()
    const {isLoading} = useCurrentQuery();
    const isAuthenticated = useSelector(selectisAuthenticated)
    

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            console.log('auth')
            router.push('/auth')
        }

        else{
            router.push('/profile')
        }
    }, [isLoading, isAuthenticated, router])


    if(isLoading){
        return <Spinner size='lg' className='absolute z-100 w-screen h-screen backdrop-blur-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
    }
    return children
}
