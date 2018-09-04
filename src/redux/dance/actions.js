const danceActions = {
    CHANGE_URL: 'CHANGE_URL',
    CHANGE_COLOR: 'CHANGE_COLOR',

    updateURL: url => {
        console.log('test', url)
        return (dispatch, getState) => {
            dispatch({
                type: danceActions.CHANGE_URL,
                url
            });
        };
    },
    updateColor: color => {
        console.log('testColor', color)
        return (dispatch, getState) => {
            const newColor = [color, ...getState().Dance.colors]
            dispatch({
                type: danceActions.CHANGE_COLOR,
                newColor
            });
        };
    }
};
export default danceActions;
