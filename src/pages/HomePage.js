import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import logo from '../assets/fedramp_logo.png'

export default function HomePage() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ textAlign: 'center', width: '100%' }}>
                <img src={logo} alt="fedramp_logo" />
            </Box>
            <Typography>Let's build some stuff</Typography>
        </Box>
    )
}