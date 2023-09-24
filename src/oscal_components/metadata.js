import * as React from 'react';

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Accordion from '../components/Accordion';
import Property from './property'
import Role from './role'
import Location from './location'
import Remarks from './remarks';

const THIS_TARGET = "o:metadata"

export default function Metadata({ metadata, target }) {

    const the_target = target ? target + "/" + THIS_TARGET : THIS_TARGET
    return (
        <Accordion summary="Metadata">

            <Grid container spacing={2}>
                <Grid item xs={2}><Typography>Title</Typography></Grid>
                <Grid item xs={10}><TextField variant="standard" sx={{ width: '100%' }} value={metadata.title} /></Grid>

                <Grid item xs={2}><Typography>Published</Typography></Grid>
                <Grid item xs={10}><TextField variant="standard" value={metadata.published} /></Grid>

                <Grid item xs={2}><Typography>Last Modified</Typography></Grid>
                <Grid item xs={10}><TextField variant="standard" value={metadata["last-modified"]} /></Grid>

                <Grid item xs={2}><Typography>Version</Typography></Grid>
                <Grid item xs={10}><TextField variant="standard" value={metadata.version} /></Grid>

                <Grid item xs={2}><Typography>OSCAL Version</Typography></Grid>
                <Grid item xs={10}><TextField variant="standard" value={metadata["oscal-version"]} /></Grid>

                <Grid item xs={2}><Typography>Properties</Typography></Grid>
                <Grid item xs={10}>
                    {metadata.props.map((prop, idx) => <Property key={prop.name + idx} property={prop} />)}
                </Grid>
                <Grid item xs={12}>
                    <Accordion summary="Roles">
                        {metadata.roles.map((role) => <Role key={role.id} role={role} target={the_target} />)}
                    </Accordion>
                </Grid>

                <Grid item xs={12}>
                    <Accordion summary="Locations">
                        {metadata.locations.map((location) => <Location key={location.uuid} value={location} target={the_target} />)}
                    </Accordion>
                </Grid>

                <Grid item xs={12}>
                    <Accordion summary="Parties">
                        {metadata.roles.map((role) => <Role key={role.id} role={role} target={the_target} />)}
                    </Accordion>
                </Grid>
                <Grid item xs={12}>
                    <Accordion summary="Responsible Parties">
                        {metadata.roles.map((role) => <Role key={role.id} role={role} target={the_target} />)}
                    </Accordion>
                </Grid>

                <Grid item xs={1}><Typography>Remarks</Typography></Grid>
                <Grid item xs={11}><Remarks remarks={metadata.remarks} /></Grid>
            </Grid>
        </Accordion>
    )
}
