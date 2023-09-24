
/*
fb14d158-d475-4090-8a76-f00107a9a707

d9077244-3a10-4771-9cd5-5ab8974d83d1

00e4c2d2-dece-4f5b-a343-1212230cb398

bc067d92-7bdf-4f2b-b90d-38c55b968d59

f2186f11-e645-4a51-8061-3d93e5fea1c9

0ee04bd4-81e2-4477-9921-8bbfe52b7fcc

75a84363-b347-496d-a72f-097036f9d6c6

14fb9eb2-40f2-4176-9b9f-a58e6dea4c25

a3d2fe5e-02a0-4cf3-93ae-591e13f06df4

de91dc05-2399-4852-8f45-05dc1f75d5de

815253af-aba6-480a-a24f-f218c5b3563f

e5c686fa-b05a-49e9-985c-23af236b0a7a

b03bb077-941c-44a9-9aed-55445ef1f691

633ffa14-b7d1-4022-8624-e7693e3cb748

fad2fb51-fa1c-4ad8-879b-48d767873cb3

7608e903-018d-44b2-ac78-bdfc5d960a0a

4e957bb1-8661-4c0e-84fb-317463826015





*/

import { useSnackbar } from 'notistack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const DEFAULT_PROPERTIES = [
    {
        "name": "marking",
        "display": "Marking"
    },
    {
        "name": "resolution-resource",
        "ns": "https://fedramp.gov/ns/oscal",
        "display": "Resolution Resource"
    },
    {
        "name": "response-point",
        "ns": "https://fedramp.gov/ns/oscal",
        "display": "Response Point"
    },
    {
        "name": "revision-history-party-uuid",
        "ns": "https://fedramp.gov/ns/oscal",
        "display": "Party Identifier"
    },
    {
        "name": "iso-iec-17020-identifier",
        "ns": "https://fedramp.gov/ns/oscal",
        "display": "ISO/IEC 17020 Identifier"
    }
]

export default function LoadProperties() {
    const { enqueueSnackbar } = useSnackbar()

    const onLoadData = () => {
        DEFAULT_PROPERTIES.forEach((property) => {
            fetch("http://localhost:8080/property", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(property)
            })
                .then(response => {
                    if (!response.ok) {
                        return Promise.reject(response.json());
                    }
                    response.json()
                })
                .then((json) => {
                    enqueueSnackbar(`Saved property: ${JSON.stringify(json)}`, { variant: 'success' })
                })
                .catch(err => {
                    enqueueSnackbar(`Error: ${JSON.stringify(err)}`, { variant: 'error' })
                })
        })
    }
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onLoadData}>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary={"Load Data"} />
            </ListItemButton>
        </ListItem>

    )
}
