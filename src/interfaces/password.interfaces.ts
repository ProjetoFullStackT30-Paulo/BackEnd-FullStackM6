export interface ICreateRecoveryRequest {
  email: string;
}

export interface IUpdatePasswordRequest {
  oldPassword: string;
  password: string;
}
