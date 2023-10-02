import React from "react";
import {cx} from "class-variance-authority";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className={cx('px-12 mx-auto w-full')}>
            {children}
        </div>
    )
}

export default Container;