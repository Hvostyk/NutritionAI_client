'use client'

import Login from '@/features/auth/ui/Login'
import Register from '@/features/auth/ui/Register'
import { Card, CardBody, select, Tab, Tabs } from '@heroui/react'
import React, { useState } from 'react'

export default function Auth() {

    const [selected, setSelected] = useState('login')

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col'>
                <Card className='max-w-full w-[340px] h-[450px]'>
                    <CardBody className='overflow-hidden'>
                        <Tabs
                            fullWidth
                            size='md'
                            selectedKey={selected}
                            onSelectionChange={(key) => setSelected(key as string)}
                        >
                            <Tab key='login' title='вход'>
                                <Login setSelected={setSelected}/>
                            </Tab>

                            <Tab key='sign-up' title='Регистрация'>
                                <Register setSelected={setSelected}/>
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}
