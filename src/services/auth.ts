import { DEFAULT_HEADERS } from '../lib/constants/api';
import { AUTH_API } from '../lib/constants/api/auth.api';
import type { AuthResult, LoginRequest } from '../lib/interfaces/auth.interface';
import type { UserRegisterRequest, UserResponse, UsersResult } from '../lib/interfaces/user.interface';

export async function register(userRegisterRequest: UserRegisterRequest) {
  try {
    const response = await AUTH_API.post<AuthResult>('/', userRegisterRequest, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(loginRequest: LoginRequest) {
  try {
    const response = await AUTH_API.post<AuthResult>('/login', loginRequest, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(userId: string, userRegisterRequest: UserRegisterRequest) {
  try {
    const response = await AUTH_API.put<UserResponse>(`/${ userId }`, userRegisterRequest, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(userId: string) {
  try {
    const response = await AUTH_API.delete<UserResponse>(`/${ userId }`, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUsers() {
  try {
    const response = await AUTH_API.get<UsersResult[]>('/', {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserById(userId: string) {
  try {
    const response = await AUTH_API.get<UserResponse>(`/${ userId }`, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserByUsernameOrEmail(usernameOrEmail: string) {
  try {
    const response = await AUTH_API.get<UserResponse>(`/${ usernameOrEmail }`, {
      responseType: 'json',
      responseEncoding: 'UTF8',
      headers: {
        ...DEFAULT_HEADERS
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
