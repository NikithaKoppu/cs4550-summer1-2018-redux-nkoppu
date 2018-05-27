import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import {WidgetContainer} from "../component/widget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }
    render() {
        return (
            <div>
                <h1>Widget List Editor {this.props.widgets.length}</h1>
                <button onClick={this.props.save}>
                    Save
                </button>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget} key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>Add widget
                </button>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets
})

const dispatcherToPropsMapper = dispatch => ({
    save: () => actions.save(dispatch),
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch)
})


export const App = connect(stateToPropertyMapper,
    dispatcherToPropsMapper)(WidgetList)
