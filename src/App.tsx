import { BrowserRouter }  from 'react-router-dom'
import { Provider }       from 'react-redux'

import CountriesList      from './pages/CountriesList'
import store              from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CountriesList/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
