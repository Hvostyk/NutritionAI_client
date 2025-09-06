'use client'
import { useTheme } from '@/app/providers/theme-provider'
import { logout } from '@/entities/user/model/userSlice'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle} from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { FaRegMoon } from 'react-icons/fa'
import { LuSunMedium } from 'react-icons/lu'
import { useDispatch } from 'react-redux'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const router = useRouter()
    const dispatch = useDispatch()

    
    const logoutHandler = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        router.push('/auth')
    }
    return (
        <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">NutritionAI</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent justify='end'>

                <NavbarItem>
                        <Button
                            size='md'
                            variant='shadow'
                            onPress={logoutHandler}
                        >
                            <span>
                                Метрики
                            </span>
                        </Button>
                </NavbarItem>

                <NavbarItem>
                        <Button
                            color='primary'
                            size='md'
                            variant='shadow'
                            onPress={logoutHandler}
                        >
                            <CiLogout/>
                            <span>
                                Выйти
                            </span>
                        </Button>
                </NavbarItem>


                <NavbarItem className='lg:flex text-3xl cursor-pointer' onClick={toggleTheme}>
                    {theme === 'dark' ? <LuSunMedium /> : <FaRegMoon />}
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    )
}
