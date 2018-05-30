import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const linkNameChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_NAME_CHANGED,
        id: widgetId,
        link: newLink})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const listChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_CHANGED,
        id: widgetId,
        listType: newType})
)
export const findAllWidgets = dispatch => {
    fetch('http://localhost:3000/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = dispatch => (
    dispatch({type: constants.SAVE})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)

