export default function CenterTextContainer ({children}) {
    return (
        <div className="flex justify-center lg:w-[50vw] w-[90vw]">
        {children}
        </div>
    )
}