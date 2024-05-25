import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';

const Apilist = () => {
    var[user,setUser]=useState([])
    useEffect(()=>{ axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((respones)=>{
        console.log(respones.data)
        setUser(respones.data)
        
},[])
})
  return (
    <div>
       
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
               <TableCell align="" >ID</TableCell>
               <TableCell align= "">USER ID</TableCell>
               <TableCell align="">TITLE</TableCell>
           </TableRow>
        </TableHead>
          <TableBody>
          {user.map((v,i)=>{
            return (
            <TableRow>
            <TableCell >{v.id}</TableCell>
            <TableCell >{v.userId}</TableCell>
            <TableCell >{v.title}</TableCell>
        </TableRow>)
        })}

          </TableBody>
          </Table>
          </TableContainer>
    </div>

  )
}

export default Apilist
