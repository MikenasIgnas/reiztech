import ListFilters from "./ListFilterButtons/ListFilters"
import ListSorters from "./ListSorterButtons/ListSorters"

const CountriesListHeader = () => {
  return (
    <header>
      <h1 className="ListTitle">Reiz Tech - Countries List</h1>
      <nav className="HeaderButtonsContainer" aria-label="List Filters and Sorters">
        <ListFilters />
        <ListSorters />
      </nav>
    </header>
  )
}

export default CountriesListHeader