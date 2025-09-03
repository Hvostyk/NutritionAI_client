'use client'

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "./theme-provider";
import Header from "@/widgets/header/ui/Header";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HeroUIProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    );
}