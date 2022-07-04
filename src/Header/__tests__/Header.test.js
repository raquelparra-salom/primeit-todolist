import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('render Header', () => {
    const { container } = render(
        <Header/>);
    expect(container).toMatchSnapshot();
});
