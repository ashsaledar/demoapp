export interface AuthResponseData {
  access_token?: string;
  email: string;
  refreshToken?: string;
  expiresIn: string;
  localId?: string;
  registered?: boolean;
  expirationDate: Date
  status?: any;
}
