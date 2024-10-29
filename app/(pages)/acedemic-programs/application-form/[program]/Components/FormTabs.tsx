export default function FormTabs() {
    return (
        <div className="py-5 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 flex-1 min-w-80">
                <div className="h-10 w-10 rounded-full border-2 border-theme grid place-items-center">
                    1
                </div>
                <span>Personal Information</span>
                <div className="h-[3px] bg-gray-300 flex-1 mt-1">
                    <div className="h-full w-0 bg-theme"></div>
                </div>
            </div>
            <div className="flex items-center gap-2 flex-1 min-w-80">
                <div className="h-10 w-10 rounded-full border-2 border-theme grid place-items-center">
                    2
                </div>
                <span>Personal Information</span>
                <div className="h-[3px] bg-gray-300 flex-1 mt-1">
                    <div className="h-full w-0 bg-theme"></div>
                </div>
            </div>
            <div className="flex items-center gap-2 min-w-80 ">
                <div className="h-10 w-10 rounded-full border-2 border-theme grid place-items-center">
                    3
                </div>
                <span>Personal Information</span>
            </div>
        </div>
    )
}
