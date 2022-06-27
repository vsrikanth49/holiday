import React from 'react'
import HolidaySearch from './HolidaySearch';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles(() => ({

    paperStyle:{
        border:"2px solid",
        padding:"20px",
        display:"flex",
        justifyContent:"center",
    }
}))
function Holidays() {

    const classes = new useStyles();
    return (
        
           <>
                <Paper className={classes.paperStyle} variant="outlined" elevation={20}  >

                   <HolidaySearch/>
                </Paper>
                </>
       
    )
}

export default Holidays;
