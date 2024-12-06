export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
    };
  }