import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

export default function Role({ role, target }) {

    return (
        <Tooltip title={role.description}>
            <Typography>{role.title}</Typography>
        </Tooltip>
    )
}