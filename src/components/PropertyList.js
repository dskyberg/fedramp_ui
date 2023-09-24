import React from 'react'

import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const FEDRAMP_NS = "https://fedramp.gov/ns/oscal"

export default function PropertyList({ data, onNodeSelect }) {

    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            onNodeSelect={onNodeSelect}
        >
            <TreeItem nodeId="ns:oscal" label="OSCAL">
                {data.filter((property) => !property.hasOwnProperty('ns')).map((property) =>
                    <TreeItem key={property.name} nodeId={property.name} label={property.display} icon={<SettingsIcon />} />
                )}
            </TreeItem>
            <TreeItem nodeId="ns:fedramp" label="FedRAMP">
                {data.filter((property) => property.hasOwnProperty('ns') && property.ns === FEDRAMP_NS).map((property) =>
                    <TreeItem key={property.name} nodeId={property.name} label={property.display} icon={<SettingsIcon />} />
                )}
            </TreeItem>
        </TreeView >
    )
}
