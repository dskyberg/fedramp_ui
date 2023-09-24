
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getRegisteredProperties, postRegisteredProperty, deleteRegisteredProperty } from '../api'
import { useSnackbar } from 'notistack';

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import Spinner from '../components/Spinner';
import PropertyList from '../components/PropertyList'
import PropertyDetail from '../components/PropertyDetail'
import AddPropertyDialog from '../components/AddPropertyDialog'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const NAMESPACES = ["ns:oscal", "ns:fedramp"]

export default function PropertiesPage() {
    const [detail, setDetail] = useState()
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const { isPending, isError, data } = useQuery({ queryKey: ['registered_properties'], queryFn: getRegisteredProperties })

    const addMutation = useMutation({
        mutationFn: postRegisteredProperty,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['registered_properties'] })
            enqueueSnackbar('Registered property added', { variant: 'success' })
        },
        onError: (error, variables, context) => {
            console.log('onError', error, variables, context)
            enqueueSnackbar('Failed to add registered property', { variant: 'error' })
        }
    })

    const deleteMutation = useMutation({
        mutationFn: deleteRegisteredProperty,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['registered_properties'] })
            enqueueSnackbar('Registered property deleted', { variant: 'success' })
        },
        onError: (error, variables, context) => {
            console.log('onError', error, variables, context)
            enqueueSnackbar('Failed to delete registered property', { variant: 'error' })
        }
    })

    const handleSaveProperty = (property) => {
        setOpen(false)
        addMutation.mutate(property)
    }

    const handleDeleteProperty = () => {
        deleteMutation.mutate(detail.name)
        setDetail(undefined)
    }

    const handleNodeSelect = (e, nodeId) => {
        if (NAMESPACES.includes(nodeId)) {
            setDetail(undefined)
            return;
        }
        const result = data.filter((property) => property.name === nodeId)
        setDetail(result[0])
    }
    if (isPending) {
        return <Spinner />
    }

    if (isError) {
        return (<h5>ERROR!</h5>)
    }


    return (
        <>
            <Box sx={{ margin: '10px' }}>
                <Paper elevation={4} sx={{ width: "100%", marginBottom: '2rem', padding: '1rem', textAlign: 'center' }}>
                    <Typography variant="h5"> Registered Properties</Typography>

                </Paper>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        <Card sx={{ width: '100%', padding: '1rem' }}>
                            <CardContent>
                                <PropertyList data={data} onNodeSelect={handleNodeSelect} />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { setOpen(true) }} >Add</Button>
                            </CardActions>
                        </Card>
                    </Box>
                    {detail &&
                        <Card>
                            <CardHeader title="Details" />
                            <CardContent>
                                <PropertyDetail property={detail} edit={edit} />
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="delete" onClick={handleDeleteProperty} >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="edit" onClick={() => { setEdit(!edit) }} >
                                    <EditIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    }
                </Box>
            </Box>
            <AddPropertyDialog open={open} onClose={() => { setOpen(false) }} onSave={handleSaveProperty} />

        </>
    )
}

