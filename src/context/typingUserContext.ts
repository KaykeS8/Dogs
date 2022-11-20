export interface PropsStorage {
  children: React.ReactNode;
}

export interface contentContext {
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
  data: { email: string; id: number; nome: string; username: string };
  error: string;
  loading: boolean;
  login: boolean;
}
