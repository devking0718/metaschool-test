import axios from "axios";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserProps {
    id: number;
    email: string;
    role: string;
    status: boolean;
    token: string;
}

interface MainContextProps {
    isLogin: boolean;
    user: UserProps | null;
    token: string;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<UserProps | null>>;
    setToken: Dispatch<SetStateAction<string>>;
    signIn: Function;
    signOut: Function;
}
const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainContextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps | null>(null);
    const [token, setToken] = useState<string>(window.localStorage.getItem("token") as string);
    const navigate = useNavigate();

    const signIn = async ({ userEmail, password }: { userEmail: string, password: string }) => {

        if (userEmail === "" || password === "") {
            toast.error("Please enter user information");;
            return;
        }

        const body = {
            email: userEmail,
            password: password
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/user/signIn`, body)
            .then(function (response) {
                toast.success(response.data.message);
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
                setToken(response.data.token)
                setIsLogin(true);
                navigate('/');
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    const signOut = () => {
        setUser(null);
        setToken("")
        setIsLogin(false);
        window.localStorage.removeItem("token");
        navigate('/');
    }

    const contextValue: MainContextProps = {
        isLogin,
        user,
        token,
        setIsLogin,
        setUser,
        setToken,
        signIn,
        signOut
    }

    return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
}

export const useMainContext = () => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error('MainContext must be used within a MaincontextProvider');
    }
    return context;
}