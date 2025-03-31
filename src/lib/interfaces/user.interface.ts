import type { RoleResponse } from './role.interface';

export interface User {
  roleId: string;
  documentNumber: string;
  mobile: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface UserRegisterRequest extends User {
  password: string;
}

export interface UserRegisterRequestExtended extends UserRegisterRequest {
  confirmPassword: string;
}

export interface UserResponse extends User {
  userId: string;
  isActive: boolean;
  created: Date;
}

export interface UsersResult {
  role: RoleResponse;
  users: UserResponse[];
}
