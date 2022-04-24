
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ChatAppRedux from './Hooks/ChatAppRedux';
import rootReducer from "./ChatAppRedux/Reducers/rootReducer";
const store = createStore(rootReducer);
function App() {
  return (
     <Provider store={store}>
       <ChatAppRedux/>
     </Provider>
  );
}

export default App;
