import { SvgProps } from "react-native-svg";

//auth
export interface IWalkthroughItem{
    Image:React.FC<SvgProps>,
    title:string,
    description:string,
}

//authuser
export interface IUser{
    avatar:string|undefined,
}

export interface IRegisterUser{
    username:string;
    email:string;
    password:string;
}

export interface ILoginUser{
    email:string;
    password:string;
}

export interface IAppTabItem{
    route:string;
    icon:string;
}

export interface IAppDrawerItem{
    route:string;
    label:string;
}