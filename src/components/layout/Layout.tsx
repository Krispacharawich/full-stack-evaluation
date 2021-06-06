import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { DRAWER_WIDTH, FOOTER_HEIGHT } from '../../common/constant'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      marginLeft: DRAWER_WIDTH,
      marginRight: DRAWER_WIDTH,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
)

interface Props {
  toggleTheme: () => void
  useDefaultTheme: boolean
  children: ReactNode
}

const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: true,
        })}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
