import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, SAVE, DELETE_WIDGET} from "./constants/index";
import {widgetReducer} from "./reducers/widgetReducer";
import {WidgetContainer} from './component/widget'
import {App} from './container/widgetList'


let store = createStore(widgetReducer)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)