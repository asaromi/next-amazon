import {Provider} from 'react-redux'

import {store} from '../app/store'
import {Layout} from '../components'
import {AuthContextProvider} from '../hooks/authProvider'
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </Provider>
  )
}

export default MyApp
