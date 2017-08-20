import React from 'react';
import PropTypes from 'prop-types';

export class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            Testing {this.props.counter}<br/>
            <div>
                <button className="btn btn-primary"
                        onClick={this.props.increment}>
                    Plus
                </button>
                <button className="btn btn-primary"
                        onClick={this.props.decrement}>
                    Minus
                </button>
            </div>
        </div>;
    }
}

TestComponent.propTypes = {

};

export default TestComponent;