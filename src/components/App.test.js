import App from "../App"
import React from "react"
import {render, screen, fireEvent, wait} from '@testing-library/react'
import mockFetchMissions from '../api/fetchMissions';
jest.mock("../api/fetchMissions");

test('renders without errors', () => {
render(<App />)
});

test('fetches and rendered mission data', async () => {
    render(<App />);
    mockFetchMissions.mockResolvedValueOnce({
      data: [
        {mission_name: "Mission 1", mission_id: "mission 1"},
        {mission_name: "Mission 2", mission_id: "mission 2"},
      ]
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);

    await wait();
    
    expect(screen.getAllByTestId('mission')).toHaveLength(2);
})