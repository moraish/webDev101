export default function ({ children }: {
    children: React.ReactNode
}) {
    return <div>
        <div className="flex justify-center border-b p-2">
            Get 20% off for the next 3 days
        </div>
        <div>
            {children}
        </div>
    </div>
}