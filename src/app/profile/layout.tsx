import Header from "@/widgets/header/ui/Header";
import StoreProvider from "../providers/store-provider";
import ClientProviders from "../providers/client-provider";
import { AuthGuard } from "@/ processes/auth/AuthGuard";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>

        <StoreProvider>
            <ClientProviders>
                <AuthGuard>
                    <Header />
                    {children}
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </AuthGuard>
            </ClientProviders>
        </StoreProvider>

    </>
    );
}   
