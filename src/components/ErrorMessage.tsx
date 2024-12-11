import {ReactNode} from "react"

type ErrorMessagenProps = {
    children: ReactNode
}
export default function ErrorMessage({children}: ErrorMessagenProps) {
    return (
        <p className="bg-red-600 p-2 text-white font-bold text-sm text-center uppercase">
            {children}
        </p>
    )
}

