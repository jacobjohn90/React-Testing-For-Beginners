import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import MovieForm from './MovieForm'

afterEach(cleanup)

// mock function to test
const onSubmit = jest.fn()

test('<MovieForm />', () => {
  const { queryByTestId, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  )
  // check to see if the form rendered
  expect(queryByTestId('movie-form')).toBeTruthy()

  // fire a change event with a target value of something for this form
  fireEvent.change(getByLabelText('Text'), {
    target: {
      value: 'hi',
    },
  })

  fireEvent.click(getByText('Submit'))

  // you can used to mocked function to test to see how many times it has been called
  expect(onSubmit).toHaveBeenCalledTimes(1)
  // check what is being submitted
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hi',
  })
})
