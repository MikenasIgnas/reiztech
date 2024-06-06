import { Countries } from '../../../types/types'
interface CountryListItemProps {
  item: Countries
}

const CountryListItem = ({ item }: CountryListItemProps) => {
  return (
    <li className='CountryListItem'>
        <div>Country: {item.name}</div>
        <div>Region: {item.region}</div>
        <div>Area: {item.area}</div>
        <div>Independent: {item.independent ? 'Yes' : 'No'}</div>
    </li>
  )
}

export default CountryListItem