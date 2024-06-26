import MiniDrawer from '@/components/admin/drawer'
import React from 'react'
MiniDrawer
const layout = ({ children }) => {
    return (
        <>
            <MiniDrawer  >
                {children}
            </MiniDrawer>

        </>
    )
}

export default layout