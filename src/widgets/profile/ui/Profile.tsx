import MetricsCard from '@/features/metricsCard/ui/MetricsCard'
import UserCard from '@/features/userCard/ui/UserCard'
import React from 'react'
import { DiVim } from 'react-icons/di'

const Profile = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <UserCard />
            <MetricsCard />
        </div>
    )
}

export default Profile