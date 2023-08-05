import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

// Helper function to wrap the component in HashRouter for testing NavLink
const renderWithRouter = (component) => render(<HashRouter>{component}</HashRouter>);

describe('Navbar component', () => {
  test('Should have the home link with it icon', () => {
    renderWithRouter(<Navbar />);
    const homeLinkElement = screen.getByText('home');
    const homeIconElement = screen.getByAltText('Back');
    expect(homeLinkElement).toBeInTheDocument();
    expect(homeIconElement).toBeInTheDocument();
  });

  test('Should have the buttons images', () => {
    renderWithRouter(<Navbar />);
    const MicrophoneButton = screen.getByAltText('Microphone');
    const SettingsButton = screen.getByAltText('Settings');
    expect(MicrophoneButton).toBeInTheDocument();
    expect(SettingsButton).toBeInTheDocument();
  });

  test('Should render correctly', () => {
    renderWithRouter(<Navbar />);
    const { container } = renderWithRouter(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
