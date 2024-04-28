"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
    IconX,
    IconVinyl,
    IconArrowDownRight,
    IconLogout2,
    /* IconHome,
    IconMessages,
    IconUser, */
} from '@tabler/icons-react'
import './components.css'

function Sidebar({ isOpen, toggleSidebar, /* router */ }) {
    const [activeItem, setActiveItem] = useState('');

    /* useEffect(() => {
        switch (pathname) {
            case '/':
                setActiveItem('home');
                break;
            case '/profile':
                setActiveItem('profile');
                break;
            default:
                setActiveItem('');
        }
    }, [router.pathname]); */

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sidebar-header'>
                <Link href="/" className="flex text-lime-400 hover:text-lime-600">
                    <div className="flex justify-center border border-lime-400 hover:border-lime-600 hover:text-lime-600 rounded-full mr-2">
                        <IconVinyl className="m-1"/>
                    </div>
                    <p className="text-2xl font-bold">UMM</p>
                </Link>
                <IconX onClick={toggleSidebar} />
            </div>
            <div className='sidebar-content'>
                <div>
                    <div className={`w-full ${activeItem === 'home' ? 'active' : ''}`}>
                        <Link href="/" className='flex items-center w-full justify-between'>
                            <p className='text-xl'>Inicio</p>
                            <IconArrowDownRight size={28}/>
                        </Link>
                    </div>
                    <Link href="/">
                        <p>Chats</p>
                        <IconArrowDownRight />
                    </Link>
                    <div className={`w-full ${activeItem === 'profile' ? 'active' : ''}`}>
                        <Link href="">
                            <p>Perfil</p>
                            <IconArrowDownRight />
                        </Link>
                    </div>
                </div>
                <IconLogout2 />
            </div>
        </div>
    )
}

export default Sidebar
