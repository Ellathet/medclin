import React, { createContext, useReducer } from "react";

import { InitialUserState, userReducer } from "./ducks/user/reducer";
import { IUserActions, IUserState } from "./ducks/user/user.types";

interface IAppActions {
  userActions: IUserActions;
}

interface IInitialStateType {
  user: IUserState;
}

const InitialState = {
  user: InitialUserState,
};

const AppContext = createContext<{
  state: IInitialStateType;
  dispatch: React.Dispatch<IAppActions>;
}>({
  state: InitialState,
  dispatch: () => null,
});

const mainReducer = (state: IInitialStateType, action: IAppActions) => ({
  user: userReducer(state.user, action.userActions),
});

interface IAppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
