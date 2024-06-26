import ResponsiveAppBar from '@/components/AppHeader';
import React from 'react'
const layout = ({ children }) => {
    return (
        <>
            <ResponsiveAppBar />
            {children}
        </>
    )
}

export default layout