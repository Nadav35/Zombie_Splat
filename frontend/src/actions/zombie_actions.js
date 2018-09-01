export const REMOVE_ZOMBIE = "REMOVE_ZOMBIE";
export const RESET_ZOMBIES = "RESET_ZOMBIES";
export const SET_ZOMBIE_COUNT = "SET_ZOMBIE_COUNT";

export const removeZombie = zombie => ({
  type: REMOVE_ZOMBIE,
  zombie
});

export const resetZombies = () => ({
  type: RESET_ZOMBIES
});

export const setZombieCount = count => ({
  type: SET_ZOMBIE_COUNT,
  count
})