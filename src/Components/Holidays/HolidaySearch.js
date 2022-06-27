import React, { useState } from 'react'
import { InputLabel, TextField, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import DialogBox from './DialogBox';
import * as constant from './constant'
const useStyles = makeStyles(() => ({
    container: {
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",

        minWidth: "800px",
        background: 'black'
    },
    autoComplete: {
        minWidth: "150px",
        color: "#fff",
        backgroundColor: "#fff",
        marginLeft: "10px",
        marginTop: "20px",
        borderRadius: "5px"
    },
    input: {
        color: "#fff",
        transformOrigin: "top center"
    },
    searchIcon: {
        minWidth: "150px",
        color: "#fff",
        backgroundColor: "red",
        marginLeft: "10px",
        marginTop: "20px",
        borderRadius: "5px"
    }

}))

function HolidaySearch() {
    const classes = new useStyles();
    const [cityList, setCityList] = useState([]);
    const [cityName, setcityName] = useState('');
    const [selectedList, setSelectedList] = useState({
        destination: "",
        startingFrom: "",
        checkin: "",
        checkout: "",
        room: ""
    })
    const [open, setOpen] = useState(false);
    const handleChange = (value, name) => {
        setcityName(value);
        const newFilter = {
            ...selectedList,
            [name]: value
        }
        setSelectedList(newFilter)
        const result = constant.destinationList.filter(cityata => cityata !== value);
        setCityList(result)
    }
    const filterChange = (value, name) => {
        const newFilter = {
            ...selectedList,
            [name]: value
        }
        setSelectedList(newFilter)

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={classes.container}>

                <FormControl variant="standard">
                    <InputLabel id="location" className={classes.input} shrink>DESTINATION</InputLabel>
                    <Autocomplete
                        disablePortal
                        className={classes.autoComplete}
                        id="combo-box-demo"
                        options={constant.destinationList}
                        getOptionLabel={option => option}
                        sx={{ width: 300 }}
                        onChange={(e, cityName) => handleChange(cityName, "destination")}
                        autoHighlight
                        renderInput={(params) => <TextField
                            required={true} style={{ minWidth: "170px" }} {...params} variant="outlined" />}
                        value={cityName}

                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel id="location" className={classes.input} shrink>FLYING FROM</InputLabel>
                    <Autocomplete
                        id="combo-box-demo"
                        options={cityList}
                        className={classes.autoComplete}
                        sx={{ width: 300 }}
                        onChange={(e, value) => filterChange(value, "startingFrom")}
                        renderInput={(params) => <TextField style={{ minWidth: "170px" }} {...params} variant="outlined" />}

                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel id="location" className={classes.input} shrink>CHECK IN</InputLabel>
                    <TextField
                        className={classes.autoComplete}
                        id="date"
                        type="date"

                        variant="outlined"
                        onChange={(e) => filterChange(e.target.value, "checkin")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel id="location" className={classes.input} shrink>CHECK OUT</InputLabel>
                    <TextField
                        className={classes.autoComplete}
                        id="date"
                        type="date"

                        variant="outlined"
                        onChange={(e) => filterChange(e.target.value, "checkout")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel id="location" className={classes.input} shrink>GUESTS & ROOMS</InputLabel>
                    <Autocomplete
                        className={classes.autoComplete}
                        id="combo-box-demo"
                        options={constant.roomList}
                        sx={{ width: 300 }}
                        onChange={(e, value) => filterChange(value, "room")}
                        renderInput={(params) => <TextField style={{ minWidth: "250px" }} {...params} variant="outlined" />}
                    />
                </FormControl>

                <TextField
                    onClick={handleClickOpen}
                    className={classes.searchIcon}
                    label="Find Holdiays"
                    variant="outlined"
                    read
                    type="search"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton style={{ color: "#fff" }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        readOnly: true
                    }}
                />
                <DialogBox open={open} handleClose={handleClose} selectedData={selectedList}></DialogBox>

            </div>
        </>
    )
}

export default HolidaySearch;
