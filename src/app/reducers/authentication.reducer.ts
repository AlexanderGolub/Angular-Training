import * as Authentication from '../actions/authentication.actions';

export interface State {
  login: string,
  token: string,
  isUserAuthenticated: boolean,
};

const initialState: State = {
  login: '',
  token: '',
  isUserAuthenticated: false,
};

export function authenticationReducer(state = initialState, action: Authentication.ActionsUnion): State {
  switch (action.type) {
    case Authentication.ActionTypes.Initialize: {
      return {
        ...state,
        login: action.payload.login,
        token: action.payload.token,
        isUserAuthenticated: action.payload.login ? true : false,
      };
    }

    case Authentication.ActionTypes.SaveUserInfo: {
      return {
        ...state,
        login: action.payload.login,
        token: action.payload.token,
        isUserAuthenticated: true,
      };
    }

    case Authentication.ActionTypes.LogOut: {
      return {
        ...state,
        login: '',
        token: '',
        isUserAuthenticated: false,
      };
    }

    default: {
      return state;
    }
  }
}
