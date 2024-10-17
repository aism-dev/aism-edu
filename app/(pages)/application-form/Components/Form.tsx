export default function Form() {
    return (
        <div className="p-5 bg-black/5">
            <form method="post">
                <div className="p-6 bg-white flex items-center gap-4">
                    <div className="flex items-center flex-1">
                        <div className="h-8 w-8 shrink-0 border bg-theme rounded-full grid place-items-center text-white">1</div>
                        <span className="pl-2 pr-4 whitespace-nowrap">Personal Information</span>
                        <div className="h-1 w-full bg-black/5">
                            <div className="h-full bg-theme w-0"></div>
                        </div>
                    </div>
                    <div className="flex items-center flex-1">
                        <div className="h-8 w-8 border shrink-0 bg-theme rounded-full grid place-items-center text-white">1</div>
                        <span className="pl-2 pr-4 whitespace-nowrap">Personal Information</span>
                        <div className="h-1 w-full bg-black/5">
                            <div className="h-full bg-theme w-0"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
