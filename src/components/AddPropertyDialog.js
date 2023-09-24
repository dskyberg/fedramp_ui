import * as React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import StringTextField from './StringTextField';
import TokenTextField from './TokenTextField';
import UriTextField from './UriTextField';
/*
    /// Property Class
    /// A textual label that provides a sub-type or characterization of the property's name. This can be used to further distinguish or discriminate between the semantics of multiple properties of the same object with the same name and ns.
    pub class: Option<TokenDatatype>,
    /// Property Name
    /// A textual label that uniquely identifies a specific attribute, characteristic, or quality of the property's containing object.
    pub name: TokenDatatype,
    /// Property Namespace
    /// A namespace qualifying the property's name. This allows different organizations to associate distinct semantics with the same name.
    pub ns: Option<UriDatatype>,
    pub remarks: Option<Remarks>,
    /// Property Universally Unique Identifier
    /// A machine-oriented, globally unique identifier with cross-instance scope that can be used to reference this defined property elsewhere in this or other OSCAL instances. This UUID should be assigned per-subject, which means it should be consistently used to identify the same subject across revisions of the document.
    pub uuid: Option<UuidDatatype>,
    /// Property Value
    /// Indicates the value of the attribute, characteristic, or quality.
    pub value: StringDatatype,
*/

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function AddPropertyDialog({ open, onClose, onSave }) {
    const [property, setProperty] = React.useState({ display: "", name: "", class: "", ns: "" })
    const handleSave = () => {

        if (property.display === "") {
            console.log("Error:  Property display cannot be empty")
            return
        }
        if (property.name === '') {
            console.log("Error:  Property name cannot be empty")
            return
        }
        const request = { name: property.name, display: property.display }
        if (property.ns !== '') {
            request.ns = property.ns
        }
        if (property.class !== '') {
            request.class = property.class
        }
        onSave(request)
    }

    return (
        <BootstrapDialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2, marginTop: '1.2rem' }} id="customized-dialog-title">
                Add Registered Property
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Add a new registered property.
                </Typography>
                <StringTextField
                    autoFocus
                    margin="dense"
                    id="property_display"
                    label="Display Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={property?.display}
                    onChange={(event) => { setProperty({ ...property, display: event.target.value, }) }}
                />
                <TokenTextField
                    autoFocus
                    margin="dense"
                    id="property_name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={property?.name}
                    onChange={(event) => { setProperty({ ...property, name: event.target.value }) }}
                />
                <TokenTextField
                    autoFocus
                    margin="dense"
                    id="property_class"
                    label="Class"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={property?.class}
                    onChange={(event) => { setProperty({ ...property, class: event.target.value }) }}
                />
                <UriTextField
                    autoFocus
                    margin="dense"
                    id="property_ns"
                    label="Namespace"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={property?.ns}
                    onChange={(event) => { setProperty({ ...property, ns: event.target.value }) }}
                />

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}