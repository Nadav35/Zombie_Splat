
import {
    RECEIVE_HEALTH
} from '../actions/player_actions';

export default (state = {health: 3}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HEALTH:
            return {health: action.health}
        default:
            return state;
    }
};