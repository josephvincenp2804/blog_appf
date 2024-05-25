import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <Typography variant="h4">ADD BLOG</Typography><br /><br />
      <TextField label="Blog Name" variant="outlined"></TextField><br /><br />
      <TextField label="Description" variant="outlined"></TextField><br /><br />
      <TextField label=" Author Name" variant="outlined"></TextField><br /><br />
      <Button variant="contained" >Submit</Button>
      
    </div>
  )
}

export default Add
