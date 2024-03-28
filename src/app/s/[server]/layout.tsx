
export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="bg-wave-server min-h-screen bg-no-repeat bg-top bg-contain pt-[12%]">
        {children}
    </div>
    )
}