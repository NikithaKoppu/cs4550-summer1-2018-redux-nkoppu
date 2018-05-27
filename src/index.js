import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

let initialState = {
    widgets: [
        {id: 0, text: 'Widget 1'},
        {id: 1, text: 'Widget 2'},
        {id: 2, text: 'Widget 3'}
    ]
}

const Widget = ({widget, dispatch}) => (
    <li>
        {widget.text}
        <button onClick={e => (
            dispatch({type: 'DELETE_WIDGET', id: widget.id})
        )}>Delete</button>

    </li>
)

const WidgetList =({widgets, dispatch}) => (
    <div>
        <h1>Widget List Editor {widgets.length}</h1>
        <ul>
            {widgets.map(widget => (
                <WidgetContainer widget={widget} key={widget.id}/>
            ))}
        </ul>
        <button onClick={e => (
            dispatch({type: 'ADD_WIDGET'})
        )}>Add widget</button>
    </div>
)

let idAutoIncrement = 3;

const WidgetContainer = connect() (Widget)

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }

        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {id: idAutoIncrement++, text: 'New Widget'}
                ]
            }
        default:
            return state
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets
})

let store = createStore(widgetReducer)

const App = connect(stateToPropertyMapper)(WidgetList)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)