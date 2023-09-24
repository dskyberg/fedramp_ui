import { useState } from 'react'
import TextField from '@mui/material/TextField'

const TOKEN_REGEX = /^([A-Za-z_])([A-Za-z0-9_\-.]*)$/g

export default function TokenTextField({ value, onChange, ...props }) {
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        let match = event.target.value.match(TOKEN_REGEX)

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