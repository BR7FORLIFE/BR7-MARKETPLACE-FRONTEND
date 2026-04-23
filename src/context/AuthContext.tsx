import { createContext, useContext } from "react"
import {type Me} from '@lib/schemas/auth/auth-schema'
import useUser from '@hooks/useAuth'


interface AuthContextType{
    data: Me | undefined
    isAuthenticated: boolean 
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null) 

function AuthProvider({children}: {children: React.ReactNode}){
    const { data, isLoading, isError } = useUser()

    const value = {
        data,
        isLoading,
        isAuthenticated: !!data && !isError
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth out in the provider!")
    }
    return context
}


export default AuthProvider