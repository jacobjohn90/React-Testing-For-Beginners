import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import Movie, { POSTER_PATH } from './Movie'

afterEach(() => {
  cleanup()
  console.error.mockClear() // you want to clear your mocks after each test if you run multiple tests within a file
})

// you can mock/spy of expected errors
console.error = jest.fn()
console.warn = jest.fn()

test('<Movie />', () => {
  render(<Movie />)
  // expecting to see the error to render the component
  expect(console.error).toHaveBeenCalled()
})

const movie = {
  id: 'hi',
  title: 'testing',
  poster_path: 'asdf.jpg',
}

test('<Movie /> with movie', () => {
  const { getByTestId } = render(
    // you need to wrap your component with a memory router orelse you'll get an error for using Links
    // outside of a router.

    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  )
  // expecting to see the error to render the component
  expect(console.error).not.toHaveBeenCalled()
  expect(console.warn).toHaveBeenCalled()
  // test to make sure that the movie link is linking correctly
  expect(getByTestId('movie-link').getAttribute('href')).toBe('/' + movie.id)
  // test to make sure that the image source is correct
  expect(getByTestId('movie-img').src).toBe(POSTER_PATH + movie.poster_path)
})
