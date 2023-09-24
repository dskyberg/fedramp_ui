
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function Location({ value, target, editable = false }) {

    console.log("Location:", value)
    const address = value?.address['addr-lines'].join('\n')

    return (
        <Grid container>
            <Grid item xs={1}><Typography>UUID</Typography></Grid>
            <Grid item xs={11}><TextField value={value?.uuid} size="small" variant="standard" sx={{ width: '40%' }} /></Grid>
            <Grid item xs={1} />
            <Grid item xs={11}>
                <Grid container>
                    <Grid item xs={1}><Typography>Address</Typography></Grid>
                    <Grid item xs={11}><TextField multiline={true} maxRows={3} value={address} size="small" variant="standard" sx={{ width: '30%' }} /></Grid>

                    <Grid item xs={1}><Typography>City</Typography></Grid>
                    <Grid item xs={11}><TextField value={value?.address?.city} size="small" variant="standard" sx={{ width: '30%' }} /></Grid>

                    <Grid item xs={1}><Typography>State</Typography></Grid>
                    <Grid item xs={11}><TextField value={value?.address?.state} size="small" variant="standard" sx={{ width: '30%' }} /></Grid>

                    <Grid item xs={1}><Typography>Zip</Typography></Grid>
                    <Grid item xs={11}><TextField value={value?.address?.zip} size="small" variant="standard" sx={{ width: '30%' }} /></Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}