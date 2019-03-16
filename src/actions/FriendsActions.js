import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}
// This is to define the Action types associated with the Gender
export function addGender(id, gender) {
  return {
    type: types.ADD_GENDER,
    id,
    gender
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
