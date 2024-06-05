import { Countries } from '../../../types/types'

interface CountryListItemProps {
    item: Countries
}

const CountryListItem = ({item}: CountryListItemProps) => {
  return (
    <div>{item.name}</div>
  )
}

export default CountryListItem