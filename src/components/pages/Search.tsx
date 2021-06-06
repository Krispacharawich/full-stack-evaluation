import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useLazyQuery } from '@apollo/client'
import { GET_SINGLE_POKEMON } from '../../graphql/query/GetSinglePokemon'
import SearchPanel from '../search/SearchPanel'
import Pokemon from '../card/Pokemon'
import { ROOT_PATH, QUERY_PARAM_SEARCH } from '../../common/constant'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

const buildQueryParam = (value: string): string =>
  `${ROOT_PATH}/?${QUERY_PARAM_SEARCH}=${value}`

const useRootStyle = makeStyles((theme: Theme) =>
  createStyles({
    searchContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    searchSection: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '10px',
      marginBottom: '20px',
    },
    searchInput: {
      width: '40%',
    },
    searchButton: {
      width: '50%',
    },
    notFound: {
      padding: '10px',
      color: 'red',
      textAlign: 'center',
    },
    loading: {
      textAlign: 'center',
    }
  }),
)

const Search: React.FC = (): JSX.Element => {
  const history = useHistory()
  const queryParam = new URLSearchParams(useLocation().search)
  const searchByParam = queryParam.get(QUERY_PARAM_SEARCH)
  const [searchName, setSearchName] = useState<string>('')
  const [searchSubmit, setSearchSubmit] = useState<string>('')
  const [getSinglePokemon, { loading, data }] = useLazyQuery(
    GET_SINGLE_POKEMON,
    {
      variables: { name: searchSubmit },
    },
  )

  useEffect(() => {
    if (searchByParam) {
      setSearchName(searchByParam)
      setSearchSubmit(searchByParam)
      getSinglePokemon()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchByParam])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setSearchName(value)
  }

  const onSubmit = (): void => {
    if (searchName !== searchByParam) {
      history.push(buildQueryParam(searchName))
    }
    setSearchSubmit(searchName)
    getSinglePokemon()
  }

  const onClickEvolution = (name: string) => {
    if (name !== searchByParam) {
      history.push(buildQueryParam(name))
    }
    setSearchName(name)
  }

  const rootStyle = useRootStyle()
  const renderResult = () =>
    data.pokemon ? (
      <Pokemon pokemon={data.pokemon} onClickEvolution={onClickEvolution} />
    ) : (
      <Paper className={rootStyle.notFound}>
        <h3>Pokemon Not Found</h3>
      </Paper>
    )

  return (
    <Container className={`search-container ${rootStyle.searchContainer}`}>
      <SearchPanel
        className={rootStyle.searchSection}
        inputClassName={rootStyle.searchInput}
        buttonClassName={rootStyle.searchButton}
        searchName={searchName}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <div data-testid="main">
        {loading ? (
          <Paper className={rootStyle.loading}>
            <p>Loading...</p> <CircularProgress />{' '}
          </Paper>
        ) : null}
        {data ? renderResult() : null}
      </div>
    </Container>
  )
}
export default Search
