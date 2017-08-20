import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.scss'
import App from './routes/App'

const store = createStore(window.__INITIAL_STATE__);

const MOUNT_NODE = document.getElementById('root');

const render = () => {
    ReactDOM.render(<App store={store}/>, MOUNT_NODE);
};

if (__DEV__) {
    module.hot.accept([
            './routes/App',
        ], () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE);
                render();
            })
    )
}

if (!__TEST__) {
    render();
}