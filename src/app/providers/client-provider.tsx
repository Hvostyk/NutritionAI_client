'use client'

import StoreProvider from "./store-provider";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./theme-provider";
import Header from "@/widgets/header/ui/Header";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <HeroUIProvider>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </HeroUIProvider>
        </StoreProvider>
    );
}