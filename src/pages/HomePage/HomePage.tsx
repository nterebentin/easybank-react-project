import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IStore } from '../../core/utilities/reducers';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Articles from '../../components/Articles/Articles';
import Footer from '../../components/Footer/Footer';


interface IProps {
}

function HomePage(props: IProps) {

   return (
    <div id="home-page" className="page">
      <div className="page-content">
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer/>
      </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
