export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementCounter = () => ({
    type: INCREMENT
});

export const decrementCounter = () => ({
    type: DECREMENT
});

const defaultState = ({
    counter: 0,
});

export default (state = defaultState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case INCREMENT:
            newState.counter = ++newState.counter;

            break;
        case DECREMENT:
            newState.counter = --newState.counter;

            break;
    }

    return newState;
}
