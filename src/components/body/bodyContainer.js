import Body from './index';
import { connect } from 'react-redux';
import { setTester1 } from '../../store/state/actions';
import { getNewsFeedData } from '../../store/state/actions';

const mapStateToProps = (state) => {
  return { tester1: state.state.tester1, newsData: state.state.newsData };
};

const mapDispatchToProps = {
  setTester1,
  getNewsFeedData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
