import danceActions from './actions';

const url = "";
const colors = ['#7ED321', '#de1b1b', '#511E78', '#ff9009', '#42a5f5'];

const initState = {
    url,
    colors
};

export default function danceReducer(state = initState, action) {
    switch (action.type) {
        case danceActions.CHANGE_URL:
            return {
                ...state,
                url: action.url
            };
        case danceActions.CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
}
