import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from '../components/pages/Search'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'
import Layout from '../components/layout/Layout'
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../theme/AppTheme'

const App: React.FC = () => {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true)
  let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme)
  theme = responsiveFontSizes(theme)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Layout toggleTheme={toggle} useDefaultTheme={true}>
              <Route path="/">
                <Search />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
