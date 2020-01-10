import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import MovieDetail from '../MovieDetail'

// needed to mock a fetch globally
global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
})

console.warn = jest.fn()

// you can mock/spy of expected errors
const match = {
  params: {
    id: '1235',
  },
}

const movie = {
  id: 'hi',
  title: 'testing rules',
}

// !important async function to hit data/api
test('<MovieDetail />', async () => {
  // mock response for this call. The response should be a json, so you much stringify the object
  fetch.mockResponseOnce(JSON.stringify(movie))

  const { getByTestId } = render(<MovieDetail match={match} />)
  // wait for the response to come back with this waitForElement and then getting the specific text.
  await waitForElement(() => getByTestId('movie-title'))

  expect(console.warn).toHaveBeenCalled()
  expect(getByTestId('movie-title').textContent).toBe(movie.title)
})
