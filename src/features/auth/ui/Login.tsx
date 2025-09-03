import React, { useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import { ILogin, IAuthProps } from '../model/types'
import { Input } from './Input'
import { Button, Link } from '@heroui/react'
import { useLazyCurrentQuery, useLoginMutation } from '@/entities/user/model/userApi'
import ErrorMessage from '@/features/error/ErrorMessage'
import { hasErrorField } from '@/shared/lib/has-error-field'
import { useRouter } from 'next/navigation'

const Login: React.FC<IAuthProps> = ({ setSelected }) => {

    const router = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<ILogin>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data: ILogin) => {
        try {
            await login(data).unwrap()
            await triggerCurrentQuery().unwrap()
            router.push('/profile')
        } catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error)

            }
        }
    }

    const [login, { isLoading }] = useLoginMutation()
    const [error, setError] = useState('')
    const [triggerCurrentQuery] = useLazyCurrentQuery()
    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <Input
                control={control}
                name='email'
                label='email'
                type='email'
                required='Обязательное поле'
            />

            <Input
                control={control}
                name='password'
                label='Пароль'
                type='password'
                required='Обязательное поле'
            />

            <ErrorMessage error={error} />

            <p className='text-center text-small'>
                Нет аккаунта?{" "}

                <Link
                    size='sm'
                    className='cursor-pointer'
                    onPress={() => setSelected("sign-up")}
                >
                    Зарегистрируйтесь
                </Link>

            </p>

            <div className='flex gap-2 justify-end'>
                <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
                    Войти
                </Button>
            </div>
        </form>
    )
}

export default Login