interface AuthContextType {
  isAuthenticated: boolean;
  signIn: (data: AuthResponse) => void;
  signOut: () => void;
  accessToken: string | null;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
