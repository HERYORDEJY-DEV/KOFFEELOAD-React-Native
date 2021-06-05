import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './TabNavigation';
import { AuthNavigation } from './AuthNavigation';

// Auth context instance
export const AuthContext = React.createContext();

// Auth initial state
const authInitialState = {
  isAuthenticated: false,
  email: null,
  pasword: null,
};

// Auth reducer
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        email: action.email,
        password: action.password,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        email: null,
        password: null,
      };
    default:
      return state;
  }
}

export default function AppNavigation() {
  const [state, dispatch] = React.useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <NavigationContainer>
        {!state.isAuthenticated ? <AuthNavigation /> : <BottomTabNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
