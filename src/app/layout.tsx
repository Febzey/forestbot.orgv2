import { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/navbar/nav'
import Footer from '@/components/navbar/footer'

export const metadata: Metadata = {
  title: "ForestBot",
  description: "Your Server's Silent Observer.",
  icons: "/forestbot_new_no_text.png",
  keywords: ["Minecraft", "Discord", "Server", "ForestBot", "Bot", "Forest", "Febzey", "Simplyvanilla", "Barevanilla", "MinecraftServerList", "Mc"],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800">
            <NavBar />

                <section>

                    {children}
                    <Footer />

                </section>
            </body>
        </html>
    )
}