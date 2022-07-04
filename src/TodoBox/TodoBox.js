import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Header from '../Header';
import TodoList from '../TodoList/TodoList';
import HistoryIcon from '@mui/icons-material/History';
import FormItem from '../FormItem';
import './styles.css';

function TodoBox() {
    const [items, setItems] = useState([])
    const [itemSelected, setItemSelected] = useState(null)
    const [open, setOpen] = useState(false);
    const [itemForm, setItemForm] = useState("")

    const handleChangeItem = (e) => {
        setItemForm(e.target.value);
    }

    const handleClickClose = () => {
        setOpen(false);
        setItemForm("")
    };

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickSelected = (item) => {
        setItemSelected(item)
    }

    const handleDoubleClickRemove = (item) => {
        const index = items.indexOf(item);
        setItems(currentItem => currentItem.filter((item, i) => i !== index));
    }


    const handleClickAdd = () => {
        // let item = prompt("Add item to list");
        if (itemForm !== null && itemForm !== "") {
            setItems([...items, itemForm]);
            setItemForm("")
        }
        setOpen(false);
    }

    const handleClickDelete = () => {
        const index = items.indexOf(itemSelected);
        setItems(currentItem => currentItem.filter((item, i) => i !== index));
        setItemSelected(null)
    }

    const handleClickDeshacer = () => {
        console.log("clicando boton deshacer")
    }


    return (
        <div className="box">
            <Header />
            <TodoList data={items} itemSelected={itemSelected} handleDoubleClickRemove={handleDoubleClickRemove} handleClickSelected={handleClickSelected} />
            <div>
                <IconButton disabled={true} color="primary" aria-label="desahcer cambios" onClick={handleClickDeshacer}>
                    <HistoryIcon />
                </IconButton>
                <div className="right-button">
                    <Button disabled={itemSelected === null} variant="outlined" onClick={handleClickDelete}>Delete</Button>
                    <Button className="margin-button" variant="contained" onClick={handleClickOpen}>Add</Button>
                </div>
            </div>
            <FormItem open={open} handleClickClose={handleClickClose} handleClickAdd={handleClickAdd} handleChangeItem={handleChangeItem} item={itemForm} />

        </div >
    );
}

export default TodoBox;
