'use client'
import { selectCurrent } from '@/entities/user/model/userSlice'
import { Card, CardBody, CardHeader } from '@heroui/react'
import React from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Profile = () => {
    const current = useSelector(selectCurrent)

    if (!current) {
        return null
    }

    const {fullname, email, id} = current
    return (
        <Card className='py-4 w-screen h-screen'>
            <CardHeader className='pb-0 pt-2 px-44 flex-col items-center justify-center'>
            </CardHeader>
            <CardBody>
            <h4 className="text-center mb-2">{fullname}</h4>

            <p className="text-default-500 flex items-center gap-2">
                <MdAlternateEmail/>
                {email}
            </p>
            </CardBody>
        </Card>
    )
}

export default Profile