import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/client/testing'
import { BulbasaurMock, CharmanderMock, SquirtleMock, NotFoundMock } from './mock/index'
import { QUERY_PARAM_SEARCH } from '../common/constant'
import Search from '../components/pages/Search';
const mocks = [BulbasaurMock, CharmanderMock, SquirtleMock, NotFoundMock]
const cases = [
  ['Bulbasaur', 'Grass'],
  ['Charmander', 'Fire'],
  ['Squirtle', 'Water'],
]
describe('test search-pokemon', () => {

  test("should render pokemon not found", async () => {
    const history = createMemoryHistory()
    history.push('/');
    render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Search />
          </MockedProvider>
        </Router>,
      )
      fireEvent.change(screen.getByTestId('search-input'), {target: {value: 'Bulbasaurss'}});
      fireEvent.click(screen.getByTestId('submit-input'));
      await waitFor(() => screen.getByText('Pokemon Not Found'));
  });

  test("should render loading", async () => {
    const history = createMemoryHistory()
    history.push(`/?${QUERY_PARAM_SEARCH}=Bulbasaur`);
    render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Search />
          </MockedProvider>
        </Router>,
      )
      await waitFor(() => screen.getByText('Loading...'), {timeout: 500});
  });

  test.each(cases)(
    'should get pokemon %p with expected type %p by fill in query param',
    async (pokemonName, type) => {
      const history = createMemoryHistory()
      history.push(`/?${QUERY_PARAM_SEARCH}=${pokemonName}`)

      render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Search />
          </MockedProvider>
        </Router>,
      )
      await waitFor(() => expect(screen.getByTestId('pokemon-type')).toHaveTextContent(type), {timeout: 2000})
      
    },
  )

  test.each(cases)(
    'should get pokemon %p with expected type %p by search input',
    async (pokemonName, type) => {
      const history = createMemoryHistory()
      history.push(`/`)

    render(
        <Router history={history}>
          <MockedProvider mocks={mocks} addTypename={false}>
            <Search />
          </MockedProvider>
        </Router>,
      )
      fireEvent.change(screen.getByTestId('search-input'), {target: {value: pokemonName}});
      fireEvent.click(screen.getByTestId('submit-input'));
      await waitFor(() => expect(screen.getByTestId('pokemon-type')).toHaveTextContent(type), {timeout: 2000})
      expect(history.location.search).toMatch(`?${QUERY_PARAM_SEARCH}=${pokemonName}`)
    },
  )
})
