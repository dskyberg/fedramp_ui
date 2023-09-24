
import { useParams } from 'react-router-dom';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

import PlanOfActionAndMilstones from '../oscal_components/plan_of_action_and_milestones'
const poams = [
    "2023-07-12T"
]

/*
 tructure
 * uuid
 * metadata
 * import-ssp
 * system-id
 * local-definitions
 * observations
 * risks
 * poam-items
 * back-matter
 */

const POAM_DOC = {
    "plan-of-action-and-milestones": {
        "uuid": "6d072a8d-9657-446d-a487-4b6984782472",
        "metadata": {
            "title": "[System Name] FedRAMP Plan of Action and Milestones (POA&M)",
            "published": "2023-07-06T00:00:00Z",
            "last-modified": "2023-07-06T00:00:00Z",
            "version": "fedramp2.0.0-oscal1.0.4",
            "oscal-version": "1.0.4",
            "remarks": "Some remarks",
            "props": [
                {
                    "name": "marking",
                    "value": "Controlled Unclassified Information"
                },
                {
                    "name": "resolution-resource",
                    "ns": "https://fedramp.gov/ns/oscal",
                    "value": "ace2963d-ecb4-4be5-bdd0-1f6fd7610f41"
                }
            ],
            "roles": [
                {
                    "id": "cloud-service-provider",
                    "title": "Cloud Service Provider",
                    "short-name": "CSP"
                },
                {
                    "id": "fedramp-pmo",
                    "title": "The FedRAMP Program Management Office (PMO)",
                    "short-name": "PMO"
                },
                {
                    "id": "fedramp-jab",
                    "title": "The FedRAMP Joint Authorization Board (JAB)",
                    "short-name": "JAB"
                },
                {
                    "id": "prepared-by",
                    "title": "Prepared By",
                    "description": "The primary individual responsible for maintaining the POA&M for this system. Typically the CSP's ISSO."
                },
                {
                    "id": "prepared-for",
                    "title": "Prepared For",
                    "description": "The organization for which this POA&M was prepared. Typically the CSP."
                },
                {
                    "id": "information-system-security-officer",
                    "title": "System Information System Security Officer (or Equivalent)",
                    "description": "The individual accountable for the security posture of the system on behalf of the system owner."
                }
            ],
            "locations": [
                {
                    "uuid": "1bd641ff-54a7-40d5-acc9-82eed9d22d4a",
                    "address": {
                        "addr-lines": [
                            "1234 Main Street",
                            "Apt 10"
                        ],
                        "city": "Arlington",
                        "state": "VA"
                    },
                    "remarks": "EXAMPLE - REPLACE"
                }
            ],
        },
        "import-ssp": {},
        "system-id": {},
        "local-definitions": [],
        "observations": [],
        "risks": [],
        "poam-items": [
            {
                "uuid": "6F5FFF73-CAC6-4DA0-A0D9-0F931A5EFAFA",
                "title": "[EXAMPLE]POA&M Item",
                "description": "Provide description",
                "props": [
                    {
                        "name": "POAM-ID",
                        "ns": "https://fedramp.gov/ns/oscal",
                        "value": "V-1"
                    }
                ],
                "related-observations": [
                    {
                        "observation-uuid": "0aa54106-8a63-4953-ac0d-30ff91f8d4ab"
                    }
                ],
                "related-risks": [
                    {
                        "risk-uuid": "9cbd98f3-abcb-4948-ad06-14e0bcba742f"
                    }
                ],
                "remarks": "The FedRAMP Extension, \\\"POAM-ID\\\" captures the traditional CSP-assigned unique POA&M identifier.\n\nThe date-time-stamp identifies the date of discovery. FedRAMP is concerned with the date information. The time information is desirable and should be included where available. The time may be all zeros if unavailable."
            },

        ],
        "back-matter": {}
    }
}


function Properties({ properties, target }) {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {properties.map((property) => (
                        <TableRow>
                            <TableCell>{property.name}</TableCell>
                            <TableCell>{property.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}


const THIS_TARGET = "plan-of-action-and-milestones"
export default function PoamPage() {
    let params = useParams();
    // This will be fetched
    let poam = POAM_DOC["plan-of-action-and-milestones"];

    return (
        <PlanOfActionAndMilstones poam={poam} />
    )
}