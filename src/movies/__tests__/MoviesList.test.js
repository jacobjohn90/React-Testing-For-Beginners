import React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import { memoryRouter, MemoryRouter } from 'react-router-dom'
import MoviesList from '../MoviesList'

// needed to mock a fetch globally
global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
})

console.warn = jest.fn()

const movies = {
  results: [
    {
      id: '12348',
      title: 'Testing',
      poster_path: 'asdteasdf123',
    },
    {
      id: '1354',
      title: 'Testing',
      poster_path: 'asdteasdf123',
    },
    {
      id: '68712',
      title: 'Testing',
      poster_path: 'asdteasdf123',
    },
  ],
}

// !important async function to hit data/api
test('<MoviesList />', async () => {
  // mock response for this call. The response should be a json, so you much stringify the object
  fetch.mockResponseOnce(JSON.stringify(movies))

  const { debug, getByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  )
  // wait for the response to come back with this waitForElement for movie-link that's within the movie component
  await waitForElement(() => getByTestId('movie-link'))
  // debug()
  expect(console.warn).toHaveBeenCalled()
  // test to make sure the length of the array is properly displayed.
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length)
})
