import { useState, useEffect } from 'react'

function useActiveLink(pathname) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const currentPath = window.location.pathname
        setIsActive(currentPath === pathname)
    }, [pathname])

    return isActive
}

export default useActiveLink
