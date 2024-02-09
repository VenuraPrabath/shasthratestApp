import { SvgProps } from "react-native-svg";

export interface IWalkthroughItem{
    Image:React.FC<SvgProps>,
    title:string,
    description:string,
}

export interface IUser{
    avatar:string|undefined,
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