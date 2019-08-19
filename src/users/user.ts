export interface User {
  userId: number;
  username: string;
  password: string;
}

export type SafeUser = Omit<User, 'password'>;
