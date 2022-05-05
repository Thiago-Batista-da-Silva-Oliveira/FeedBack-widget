import { CircleNotch } from "phosphor-react"

export const Loading = () => {
    return (
        <div className="w6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
        </div>
    )
}