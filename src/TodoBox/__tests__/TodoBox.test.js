import React from 'react';
import { render } from '@testing-library/react';
import TodoBox from '../TodoBox';

test('render TodoBox', () => {
    const { container } = render(
        <TodoBox />);
    expect(container).toMatchSnapshot();
});
