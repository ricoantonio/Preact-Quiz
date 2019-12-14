import './style';
import App from './components/app';
import { Provider } from 'unistore/preact'
import {store} from './components/Home/storeAction'

const ProviderApp =()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

export default ProviderApp;
