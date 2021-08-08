import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.bubble.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router'
import Main from './components/MainComponent'
import { configureStore } from './redux/configureStore'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
export const history = createHistory()
const store = configureStore()
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;