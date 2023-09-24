import { Box, Typography } from "@mui/material";

import Metadata from './metadata'

const THIS_TARGET = "o:plan-of-action-and-milestones"
export default function plan_of_action_and_milestones({ poam }) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5">{poam.metadata.title}</Typography>
            <Metadata metadata={poam.metadata} target={THIS_TARGET} />
        </Box >
    )
}