

export default function Layout({ children }: { children: React.ReactNode }) { 
    return (
        <div className="flex flex-col min-h-screen bg-commands-bg bg-cover bg-no-repeat bg-top">
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}