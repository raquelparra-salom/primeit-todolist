import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './styles.css';

function TodoList({ data, itemSelected, handleClickSelected, handleDoubleClickRemove }) {
    if (data.length === 0) {
        return <div className='default-message'> No hay elementos </div>;
    }
    return (

        // <>
        //     <ul>
        //         {items.map(item => <li key={item}>{item}</li>)}
        //     </ul>
        // </>
        <List>

            {data.map((item, i) => <ListItem key={i} disablePadding>
                <ListItemButton selected={item === itemSelected} onClick={() => { handleClickSelected(item) }} onDoubleClick={() => { handleDoubleClickRemove(item) }} >
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>)}
        </List>

    );
}

export default TodoList;
