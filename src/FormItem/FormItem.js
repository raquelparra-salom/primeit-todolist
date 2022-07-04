import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function FormItem({ open, item, handleClickClose, handleClickAdd, handleChangeItem }) {


    return (
        <div>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Add item to list</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={handleChangeItem}
                        value={item}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Type the text here"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button disabled={item === ""} variant="contained" onClick={handleClickAdd}>Add</Button>
                    <Button onClick={handleClickClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormItem;