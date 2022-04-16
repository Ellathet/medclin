import {
  ActionsUserTypes,
  IUser,
  IUserActions,
  IUserState,
} from "./user.types";

export const InitialUserState = {
  user: null,
  users: [],
};

export const userReducer = (state: IUserState, action: IUserActions) => {
  switch (action.type) {
    case ActionsUserTypes.CREATE_USER:
      return [...state, action.payload];
    case ActionsUserTypes.DELETE_USER:
      return [
        ...state.users.filter((user: IUser) => user.id !== action.payload.id),
      ];
    default:
      return state;
  }
};
