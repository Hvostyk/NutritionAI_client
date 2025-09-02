import { JSX } from "react";
import { Control } from "react-hook-form";

export interface IInputProps {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    control: Control<any>;
    required?: string;
    endContent?: JSX.Element
}

export interface IAuthProps {
    setSelected: (value: string) => void
}

export interface IRegister{
    email: string
    fullname: string
    password: string
}

export interface ILogin {
    email: string;
    password: string
}