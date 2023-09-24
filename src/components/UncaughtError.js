import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box'
import oops from '../assets/oops.png'
import Button from '@mui/material/Button'

export default function UncaughtError({ error, errorInfo }) {
    const navigate = useNavigate();
    return (
        <Box style={{ textAlign: 'center' }}>
            <img src={oops} alt="oops" />
            <Typography variant="h5" >
                Something went wrong!
            </Typography>
            {error &&
                <Typography >Error: {JSON.stringify(error)}</Typography>}
            {errorInfo && <Typography >{JSON.stringify(errorInfo)}</Typography>}

            <Button onClick={() => { navigate("/", { replace: true }) }}>Return home</Button>
        </Box>

    )
}