"use client"
import React, { FunctionComponent, useEffect, useState } from 'react';

interface Props {
    className?: string[],
    children: React.ReactNode
}

export const Card: FunctionComponent<Props> = ({ children, className }) => {
    const [ styles, setStyles] = useState(["p-[16px]", "rounded-lg", "border-[--border-color]", "border-[1px]", "bg-gradient-to-b", "from-cardStart", "to-cardEnd"])

    useEffect( () => {
        className && setStyles([...styles, ...className])
    }, [className])

    return (
        <div className={styles.join(" ")}>
            {children}
        </div>
    )
}