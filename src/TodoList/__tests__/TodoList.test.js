import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../TodoList';

test('render TodoList Empty', () => {


    const handleClickSelected = () => { }
    const handleDoubleClickRemove = () => { }
  
    const { container } = render(
        <TodoList data={[]} itemSelected={null} handleClickSelected={handleClickSelected} handleDoubleClickRemove={handleDoubleClickRemove}/>);
    expect(container).toMatchSnapshot();
});


test('render TodoList with items', () => {


    const handleClickSelected = () => { }
    const handleDoubleClickRemove = () => { }
  
    const { container } = render(
        <TodoList data={["item1", "item2", "item3"]} itemSelected={null} handleClickSelected={handleClickSelected} handleDoubleClickRemove={handleDoubleClickRemove}/>);
    expect(container).toMatchSnapshot();
});