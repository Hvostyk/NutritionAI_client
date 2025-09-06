'use client'
import { BASE_URL } from '@/constants'
import { selectCurrent } from '@/entities/user/model/userSlice'
import { Card, CardBody, CardHeader, Image } from '@heroui/react'
import React from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { useSelector } from 'react-redux'

const UserCard = () => {
    const current = useSelector(selectCurrent)

    if (!current) {
        return null
    }

    const {fullname, email, id, avatarUrl} = current

    return (
        <Card className='w-[30%] my-5'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center justify-center'>
                <Image
                alt = 'Card profile'
                className='object-cover rounded-xl'
                src={`${BASE_URL}${avatarUrl}`}
                />
            </CardHeader>
            <CardBody className='flex items-center justify-center'>
            <h4 className="text-center mb-2">{fullname}</h4>

            <p className="text-default-500 flex items-center gap-2">
                <MdAlternateEmail/>
                {email}
            </p>
            </CardBody>
        </Card>
    )
}

export default UserCard