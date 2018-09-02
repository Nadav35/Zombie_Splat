export const RECEIVE_HEALTH = 'RECEIVE_HEALTH';

export const setHealth = (health) => ({
    type: RECEIVE_HEALTH,
    health
});