import { Provider }       from 'react-redux'
import CountriesList      from './pages/CountriesList'
import store              from './store/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CountriesList/>
    </Provider>
  )
}

export default App
