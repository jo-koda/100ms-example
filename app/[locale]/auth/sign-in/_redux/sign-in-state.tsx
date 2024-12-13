import { TextField } from '@/models/text-field';

export interface SignInState {
  email: TextField<string>;
  password: TextField<string>;
}
