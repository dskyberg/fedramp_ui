import { useState } from 'react'

import { Typography } from '@mui/material'

import Box from '@mui/material/Box'

import RemarksEditor from './RemarksEditor'

export default function PropertyDetail({ property, edit }) {
    const [remarks, setRemarks] = useState("This is **important** `code`.")

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 400, padding: '1rem' }} >
            <Typography gutterBottom>Name: {property.name}</Typography>
            <Typography gutterBottom>Class: {property?.class ?? ""}</Typography>
            <Typography >Namespace: {property?.ns ?? ""}</Typography>

            <Typography>Remarks</Typography>
            <RemarksEditor value={remarks} edit={edit} onChange={(value) => { setRemarks(value) }} />
        </Box>
    )
}