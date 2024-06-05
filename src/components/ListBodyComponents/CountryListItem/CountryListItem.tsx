import { Countries } from '../../../types/types'

interface CountryListItemProps {
    item: Countries
}

const CountryListItem = ({item}: CountryListItemProps) => {
  return (
    <div className='CountryListItem'>
        <div>Country: {item.name}</div>
        <div>Region: {item.region}</div>
        <div>Area: {item.area}</div>
        <div>Independent: {item.independent ? 'Yes' : 'No'}</div>
    </div>
  )
}

export default CountryListItem