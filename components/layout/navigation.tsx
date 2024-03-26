'use client'
import React from 'react'
import { useState } from 'react';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (item: string) => {
        setActiveItem(item);
    }
    return (
        <div>
            <ul className="sm:flex list-none gap-x-10 secondary hidden">
                {['Home', 'About', 'Services', 'Contact'].map(item => (
                    <li
                        key={item}
                        className={item === activeItem ? 'primary' : ''}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation