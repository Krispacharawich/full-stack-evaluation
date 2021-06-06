import React from 'react'
import { IPokemon } from '../../graphql/interface/pokemon.interface'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useCreateStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '20px',
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    avatarContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    type: {
      display: 'flex',
      flexDirection: 'row',
    },
    maxHpCp: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    detail: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    attackDetail: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    modifyTextColor: {
      color: '#0F0842',
    },
    cursor: {
      cursor: 'pointer',
    },
  }),
)

const createRow = (name: string, type: string, damage: string) => ({
  name,
  type,
  damage,
})

const CardItem: React.FC<{
  pokemon: IPokemon
  onClickEvolution: (name: string) => void
}> = ({
  pokemon,
  onClickEvolution,
}: {
  pokemon: IPokemon
  onClickEvolution: (name: string) => void
}) => {
  const style = useCreateStyle()
  const attackFastRow = pokemon.attacks.fast.map((item) =>
    createRow(item.name, item.type, item.damage),
  )
  const attackSpecialRow = pokemon.attacks.special.map((item) =>
    createRow(item.name, item.type, item.damage),
  )
  return (
    <Paper className={`pokemon ${style.container}`} elevation={3}>
      <div className={style.title}>
        <h3>
          <Chip
            label={`No: ${pokemon.number}`}
            variant="outlined"
            color="primary"
          />
        </h3>
        <h3>
          {' '}
          <Chip
            label={pokemon.name}
            variant="outlined"
            color="primary"
            icon={<AccountCircleIcon />}
          />
        </h3>
      </div>
      <Divider />
      <div className={style.maxHpCp}>
        <div className="pokemon__max-hp">
          <h3>
            <Chip
              label={`Max HP: ${pokemon.maxHP}`}
              variant="outlined"
              color="primary"
            />
          </h3>
        </div>
        <div className="pokemon__max-cp">
          <h3>
            <Chip
              label={` Max CP: ${pokemon.maxCP}`}
              variant="outlined"
              color="primary"
            />
          </h3>
        </div>
      </div>
      <div className={style.avatarContainer}>
        <Avatar
          src={pokemon.image}
          alt={pokemon.name}
          className={style.avatar}
        />
      </div>
      <div className={`${style.detailContainer} ${style.modifyTextColor}`}>
        <div className={style.detail}>
          <div className="detail__left">
            <div className="pokemon__type">
              <h3 data-testid='pokemon-type'>
                Type{' '}
                {pokemon.types?.map((item, index) => (
                  <Chip key={index} label={item} variant="outlined" />
                ))}
              </h3>
            </div>
            <div className="pokemon__classification">
              <h3>
                Classification{' '}
                <Chip label={pokemon.classification} variant="outlined" />
              </h3>
            </div>
            <div className="pokemon__resistance">
              <h3>
                Resistant{' '}
                {pokemon.resistant?.map((item, index) => (
                  <Chip key={index} label={item} variant="outlined" />
                ))}
              </h3>
            </div>

            <div className="pokemon__weakness">
              <h3>
                Weakness{' '}
                {pokemon.weaknesses?.map((item, index) => (
                  <Chip key={index} label={item} variant="outlined" />
                ))}
              </h3>
            </div>
          </div>
          <div className="detail__right">
            <div className="pokemon__dimension">
              <div className="pokemon__dimension__weight">
                <h3>
                  Weight{' '}
                  <span>
                    <Chip
                      label={`Min: ${pokemon.weight.minimum}`}
                      variant="outlined"
                    />
                    <Chip
                      label={`Max: ${pokemon.weight.maximum}`}
                      variant="outlined"
                    />
                  </span>
                </h3>
              </div>
              <div className="pokemon__dimension__height">
                <h3>
                  Height{' '}
                  <span>
                    <Chip
                      label={`Min: ${pokemon.height.minimum}`}
                      variant="outlined"
                    />
                    <Chip
                      label={`Max: ${pokemon.height.maximum}`}
                      variant="outlined"
                    />
                  </span>
                </h3>
              </div>
            </div>

            <div className="pokemon__fleerate">
              <h3>
                FleeRate <Chip label={pokemon.fleeRate} variant="outlined" />
              </h3>
            </div>
          </div>
        </div>
        <Divider />
        <div className={style.attackDetail}>
          <div className="attack__fast">
            <h3>Attack Fast</h3>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Damage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attackFastRow.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.damage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="attack__special">
            <h3>Attack Special</h3>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Damage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attackSpecialRow.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.damage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {pokemon.evolutions ? (
          <div className="pokemon__evolution">
            <Divider />
            <h3>Evolutions</h3>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{pokemon.name}</TimelineContent>
              </TimelineItem>

              {pokemon.evolutions.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <span
                      onClick={() => onClickEvolution(item.name)}
                      className={style.cursor}
                    >
                      {item.name}
                    </span>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        ) : null}
      </div>
    </Paper>
  )
}
export default CardItem
