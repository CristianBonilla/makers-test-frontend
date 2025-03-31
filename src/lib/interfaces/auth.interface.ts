import type { RoleResponse } from './role.interface';
import type { UserResponse } from './user.interface';

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface AuthResult {
  token: string;
  user: UserResponse;
  role: RoleResponse;
}
