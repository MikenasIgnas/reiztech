import ListFilters from "./ListFilterButtons/ListFilters"
import ListSorters from "./ListSorterButtons/ListSorters"

const CountriesListHeader = () => {
  return (
    <div>
      <div>Countries List</div>
      <div className="HeaderButtonsContainer">
        <ListFilters/>
        <ListSorters/>
      </div>
    </div>
  )
}

export default CountriesListHeader