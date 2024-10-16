export const LoginStart = userCredentials => ({
  type: 'LOGIN_START',
});

export const LoginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
export const Logout = () => ({
  type: 'LOGOUT',
});

// User Updated

export const UpdatedStart = userCredentials => ({
  type: 'UPDATED_START',
});

export const UpdatedSuccess = user => ({
  type: 'UPDATED_SUCCESS',
  payload: user,
});

export const UpdatedFailure = () => ({
  type: 'UPDATED_FAILURE',
});
