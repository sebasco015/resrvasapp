import { create } from "zustand";

interface AuthState {
status: 'Authenticated' | 'NotAuthenticated' | 'Cheking';
token? : string;
user? : {
    name: string;
    email: string;
 }
}

export const useAuthStore = create<AuthState>()( () => ({
    status: 'Cheking',
    token: undefined,
    user: undefined
}))
