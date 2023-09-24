import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box'
import oops from '../assets/oops.png'
import Button from '@mui/material/Button'

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <Box style={{ textAlign: 'center' }}>
            <img src={oops} alt="oops" />
            <Typography variant="h5" >
                Nothing to see here
            </Typography>
            <Button onClick={() => { navigate("/", { replace: true }) }}>Return home</Button>
        </Box>
    )
}