import MultiActionAreaCard from '@/components/profileCard'
import { Box, Grid } from '@mui/material'
import React from 'react'

const boardMemers = () => {
    return (
        <Box>
            <Grid conatiner >
                <Grid item sx={10}>
                    <MultiActionAreaCard></MultiActionAreaCard>
                </Grid>
            </Grid>
        </Box>
    )
}

export default boardMemers