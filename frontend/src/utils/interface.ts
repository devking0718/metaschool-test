import { Dispatch, SetStateAction } from "react";;

export interface MainContextProps {
    isLogin: boolean;
    user: UserProps | null;
    token: string;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<UserProps | null>>;
    setToken: Dispatch<SetStateAction<string>>;
    signIn: Function;
    signOut: Function;
}

export interface UserProps {
    userId: number;
    email: string;
    role: string;
    status: boolean;
    token: string;
}

export interface AssessMentListProps {
    id: number;
    title: string;
    description: string;
}

export interface SectionListItemProps {
    id: number;
    title: string;
    assessmentId: string;
    questions: QuestionItemProps[];
}

export interface QuestionItemProps {
    id:number;
    text: string;
    type: string;
    sectionId:number;
    answers: AnswerItemProps[];
}

export interface AnswerItemProps {
    id: number;
    isCorrect: boolean;
    questionId: number;
    text: string;
}

export interface UserHistoryProps {
    no: number;
    userEmail: string;
    attempts: AttemptProps[];
}

export interface AttemptProps {
    assessmentTitle: string;
    numAttempts: number;
}