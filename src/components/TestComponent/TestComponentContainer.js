import {connect} from 'react-redux'
import {withRouter} from 'react-router';

import TestComponent from './TestComponent'
import {decrementCounter, incrementCounter} from "../../store/test";

const mapStateToProps = (state) => ({
    counter: state.test.counter
});

const mapDispatchToProps = {
    increment: () => incrementCounter(),
    decrement: () => decrementCounter()
};

const Container = connect(mapStateToProps, mapDispatchToProps)(TestComponent);
export default withRouter(Container);
