import { Link as RouterLink, } from 'react-router-dom';
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import Link from '@mui/material/Link'


const poams = [
    "2023-07-12T"
]
function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />
}


export default function PoamsPage() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>POA&Ms</Typography>
            {poams.map((poam) => (
                <LinkRouter key="poam" to={"/poams/" + poam} >
                    {poam}
                </LinkRouter>
            ))}
        </Box>
    )
}