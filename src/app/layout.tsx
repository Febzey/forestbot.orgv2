import { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/navbar/nav'
import Footer from '@/components/navbar/footer'

export const metadata: Metadata = {
    title: "ForestBot - Home",
    description: "ForestBot the minecraft bot",
    keywords: "SimplyVanilla, ForestBot, Forest, Bot, Simly, Vanilla, Minecraft,",
    applicationName: "ForestBot",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="">
                <section className="relative min-h-screen bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800">
                    <NavBar />

                    {children}
                    <Footer />

                </section>
            </body>
        </html>
    )
}