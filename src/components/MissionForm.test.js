import {fireEvent, render, screen} from '@testing-library/react'
import MissionForm from './MissionForm'
import React from 'react'


test('MissionForm renders correctly', () => {
    render(<MissionForm />)
});

test('renders the message when isFetching is true', () => {
    render(<MissionForm isFetchingdata={true} />);
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
});

test('render button when isFetchingData is false', () => {
    render(<MissionForm isFetchingdata={false} />);
    const value = screen.queryByRole('button');
    expect(value).not.toBeNull()
});

test('calls getData when button is pressed', () => {
    const mockGetData = jest.fn(() => {});
    render(<MissionForm getData={mockGetData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    console.log(mockGetData.mock)
    expect(mockGetData.mock.calls).toHaveLength(2)
})