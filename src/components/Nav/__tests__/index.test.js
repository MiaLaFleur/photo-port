import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// cleanup statement
afterEach(cleanup);

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });

});

// Emoji Visibility Test
  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
      // Arrange
      const { getByLabelText } = render(<Nav />);

      // Assert
      expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

// Link Visibility Test
describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav />);

    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})