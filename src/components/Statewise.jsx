import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Statewise() {


    const [data, setData] = useState(["hey", "now"])

    const Dataupdate = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const realData = await res.json();
        setData(realData.statewise);
    }


    useEffect(() => {
        Dataupdate()
    },[]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Covid Tracker
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor : "black"}}>
            <TableCell style={{color : "white"}} align="center">State</TableCell>
            <TableCell style={{color : "white"}}  align="center">Active&nbsp;(g)</TableCell>
            <TableCell style={{color : "white"}} align="center">Deaths&nbsp;(g)</TableCell>
            <TableCell style={{color : "white"}} align="center">Recovered&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
           index && <TableRow
              key={index}
            className="top">
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center" className='positive'>{row.active}</TableCell>
              <TableCell align="center" className='negative'>{row.deaths}</TableCell>
              <TableCell align="center" className='positive'>{row.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
