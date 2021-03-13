import Header from './index.jsx';
import { connect } from 'react-redux';
import { getNewsFeedData } from '../../store/state/actions';
import { setTester } from '../../store/state/actions';
import { setTester1 } from '../../store/state/actions';

const mapStateToProps = (state) => {
  return {
    newsData: state.state.newsData,
    tester: state.state.tester,
    tester1: state.state.tester1,
  };
};

const mapDispatchToProps = {
  getNewsFeedData,
  setTester,
  setTester1,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
