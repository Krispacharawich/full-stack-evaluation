import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

interface ISearchProps {
  className: string
  inputClassName: string
  buttonClassName: string
  searchName: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}
const SearchPanel: React.FC<ISearchProps> = ({
  className,
  inputClassName,
  buttonClassName,
  searchName,
  onChange,
  onSubmit,
}: ISearchProps): JSX.Element => (
  <Paper className={`search ${className}`}>
    <TextField
      name="name"
      label="Search Pokemon Name"
      value={searchName}
      onChange={onChange}
      className={inputClassName}
      inputProps={{ 'data-testid': 'search-input' }}
    />
    <Button
      onClick={onSubmit}
      color="primary"
      variant="contained"
      className={buttonClassName}
      data-testid="submit-input"
    >
      Search
    </Button>
  </Paper>
)
export default SearchPanel
