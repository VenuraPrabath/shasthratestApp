export const splash = {
    SPLASH:"splash",
}

export const walkthrough = {
    WALKTHROUGH:"walkthrough",
}

export const auth = {
    LOGIN:"login",
    REGISTER:"register",
}

export type AuthStackParams = {
  login:undefined;
  register:undefined;
}

export type AppStackParams = {
    home:undefined;
    recentQuestions :undefined;
}

export type AppTabParams = {
    home:undefined;
    ask:undefined;
    wallet:undefined;
}