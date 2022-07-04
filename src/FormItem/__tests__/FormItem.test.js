import React from 'react';
import { render } from '@testing-library/react';
import FormItem from '../FormItem';

test('render formItem close', () => {

    const handleClickClose = () => { }
    const handleClickAdd = () => { }
    const handleChangeItem = () => { }
    const { container } = render(
        <FormItem
            open={false}
            item="Texto ejemplo"
            handleClickClose={handleClickClose}
            handleClickAdd={handleClickAdd}
            handleChangeItem={handleChangeItem}
        />);
    expect(container).toMatchSnapshot();
});

test('render formItem open', () => {

    const handleClickClose = () => { }
    const handleClickAdd = () => { }
    const handleChangeItem = () => { }
    const { container } = render(
        <FormItem
            open={true}
            item="Texto ejemplo"
            handleClickClose={handleClickClose}
            handleClickAdd={handleClickAdd}
            handleChangeItem={handleChangeItem}
        />);
    expect(container).toMatchSnapshot();
});
