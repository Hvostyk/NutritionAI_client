'use client'

import { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Next.js + Redux Toolkit + FSD</h1>
                    <p className="text-gray-600">Пример приложения с архитектурой Feature-Sliced Design</p>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

