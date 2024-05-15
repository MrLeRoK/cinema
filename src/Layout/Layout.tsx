import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export const Layout = ({children, className}:LayoutProps) => {
    return (
        <div className={className}>{children}</div>
    );
};
