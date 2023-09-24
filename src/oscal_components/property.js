import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

export default function Property({ property, target }) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>{property.name}</Grid>
            <Grid item xs={10}>
                <TextField variant="standard" value={property.value} sx={{ width: "100%" }} />
            </Grid>
        </Grid>
    )
}