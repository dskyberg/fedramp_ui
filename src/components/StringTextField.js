import { useState } from 'react'
import TextField from '@mui/material/TextField'

const REGEX = /^\S(.*)?$/g

export default function StringTextField({ value, onChange, ...props }) {
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        let match = event.target.value.match(REGEX)

        if (!match || match.len === 0) {
            setError("Invalid Token")
        } else {
            setError(null)
            onChange(event)
        }
    }

    return <TextField
        type="text"
        error={error !== null}
        helperText={error}
        value={value}
        onChange={handleChange}
        {...props}
    />

}