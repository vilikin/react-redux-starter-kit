import React from 'react'
import {Provider} from 'react-redux'
import PageLayout from "../layouts/PageLayout";
import createBrowserHistory from 'history/createBrowserHistory'
import {syncHistoryWithStore} from 'react-router-redux'

import {HashRouter} from "react-router-dom"
import TestComponent from "../components/TestComponent/TestComponentContainer";

class App extends React.Component {
    render() {
        return <Provider store={this.props.store}>
            <HashRouter history={syncHistoryWithStore(createBrowserHistory(), this.props.store)}>
                <PageLayout>
                    <TestComponent/>
                </PageLayout>
            </HashRouter>
        </Provider>;
    }
}

export default App;
