import { ElementType, ReactNode } from "react"

type ContainerProps = {
    children: ReactNode 
    className?: string
    as?: ElementType
}

export const Container = ({children, className, as: Component = 'nav'}: ContainerProps) => {
    return (
        <Component className={className}>
            {children}
        </Component>
    )
}