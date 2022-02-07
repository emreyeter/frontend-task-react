/**
 * @jest-environment jsdom
 */


import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import React from 'react'

import { Search } from '../src/components';

const TEST_STRING = 'test string';
const EMPTY_STRING = '';

describe('Search Component', () => {
  it('should render without crashing and has to be in document', () => {
    render(<Search onSearch={() => null} />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    cleanup();
  });

  it('Can clear input when press the clear button', () => {

    render(<Search onSearch={() => null} />);
    const searchInput = screen.getByTestId('search-input');
    const clearButton = screen.getByTestId('clear-button');

    //change the input value and check if the input value is changed
    fireEvent.change(searchInput, {
      target: {
        value: TEST_STRING
      }
    })
    expect(searchInput.value).toBe(TEST_STRING);

    //click the clear button and check if the input value is empty
    fireEvent.click(clearButton);
    expect(searchInput.value).toBe(EMPTY_STRING);

    cleanup();
  });


});
