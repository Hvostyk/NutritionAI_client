import React from 'react'
import { IInputProps } from '../model/types'
import { Input as HeroUIInput } from '@heroui/react'
import { useController } from 'react-hook-form'

export function Input({
    name,
    label,
    placeholder,
    type,
    control,
    required = '',
    endContent
}: IInputProps) {

    const { field, fieldState: { invalid }, formState: { errors } } = useController({
        name,
        control,
        rules: {
            required
        }
    })
    return (
        <HeroUIInput
            id={name}
            label={label}
            type={type}
            placeholder={placeholder}
            value={field.value}
            name={field.name}
            isInvalid={invalid}
            onChange={field.onChange}
            onBlur={field.onBlur}
            errorMessage={`${errors[name]?.message ?? ''}`}
        >

        </HeroUIInput>
    )
}
