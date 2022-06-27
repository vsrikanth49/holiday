import React from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@material-ui/core';

function DialogBox(props) {
    const { selectedData } = props;

    const handleClose = () => {
        props.handleClose()
    };
    return (
        <>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Holiday List"}
                </DialogTitle>
                <DialogContent>
                    {selectedData.destination && selectedData.startingFrom && selectedData.checkin && selectedData.checkout && selectedData.room ?
                        <DialogContentText id="alert-dialog-description">
                            Your selected Destination {selectedData.destination}
                            <br />
                            You are starting from {selectedData.startingFrom}
                        </DialogContentText> :
                        <DialogContentText id="alert-dialog-description">
                            Please select required options
                        </DialogContentText>}
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DialogBox;
