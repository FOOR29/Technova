import type { ReactNode } from "react";
// aqui iran los tipados

export type LoginFormData = {
    name: string;
    password: string;
};

export type Users = {
    id: number,
    name: string,
    permissions: string[],
    role: string[]
}

export type HomeProsps = {
    user: Users | null
}

export type ProtectedRouteProps = {
    user?: Users | null ;
    children?: ReactNode;  // siempre importar ReactNode
    isAuth?: boolean
    redirectTo?: any
};