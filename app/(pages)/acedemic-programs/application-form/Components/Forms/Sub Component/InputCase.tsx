interface InputProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    error: string;
    heading: string;
    required: boolean
}

export default function InputCase({ children, error, heading, required, ...props }: InputProps) {
    return (
        <div {...props}>
            <h4 className="text-lg font-semibold text-theme">{heading}{required && <span className="px-2 text-red-500">*</span>}</h4>
            <div className="flex border-2 focus-within:border-black/50 overflow-hidden outline outline-2 outline-transparent focus-within:outline-theme outline-offset-2">
                {children}
            </div>
            <p className="text-sm text-red-600 font-semibold">{error}</p>
        </div>
    )
}
