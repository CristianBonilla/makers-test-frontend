export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface UserRegisterRequest {
  roleId: string;
  documentNumber: string;
  mobile: string;
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
}
