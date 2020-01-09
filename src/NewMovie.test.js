import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import NewMovie from './NewMovie'

afterEach(cleanup)

test('<NewMovie />', () => {
  const { getByTestId, queryByTestId, container, getByText } = render(
    <NewMovie />
  )
  expect(getByTestId('page-title').textContent).toBe('New Movie')
  expect(queryByTestId('movie-form')).toBeTruthy()

  // use snapshot to check if the file is comparable to the snapshot created. Useful for code that doesn't/shouldn't change
  expect(container.firstChild).toMatchSnapshot()
})
