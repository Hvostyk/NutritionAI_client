'use client'
import { useTheme } from '@/app/providers/theme-provider'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import React from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { LuSunMedium } from 'react-icons/lu'

export default function Header() {
    const {theme, toggleTheme} = useTheme()
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">NutritionAI</p>
            </NavbarBrand>

            <NavbarContent justify='end'>
                <NavbarItem className='lg:flex text-3xl cursor-pointer' onClick={toggleTheme}>
                    {theme === 'dark' ? <LuSunMedium /> : <FaRegMoon />}
                </NavbarItem>

                <NavbarItem>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
