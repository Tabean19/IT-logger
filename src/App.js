import React, { useEffect, Fragment } from 'react';
import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/layout/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/layout/logs/AddLogModal';
import EditLogModal from './components/layout/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //initializes materialize js
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <Logs />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
