import {Provider} from 'react-redux'
import {store} from '../app/store'

import {AuthContextProvider} from '../hooks/authProvider'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Provider>
  )
}

export default MyApp
