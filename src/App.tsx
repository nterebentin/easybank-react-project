import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import './App.scss';
import { IStore } from './core/utilities/reducers';
import { router } from './core/utilities/router';
import HomePage from './pages/HomePage/HomePage';

interface IProps {
}

function App(props: IProps) {

  return (
    <div id="app">
      <Routes>
        <Route path={router.HOME} element={<HomePage />} />
        <Route path="*" element={<Navigate to={router.HOME} />} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
    },
    dispatch,
  );
};
const mapStateToProps = (store: IStore) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
