// types = data value definido para determinada caracteristica

// types = data value definido para determinada caracteristica
export type TPerson = {
    id: string, 
    name :string,
    email: string,
    password: string,
    role: TAccount
}

export type TAccount = {
    keyAdmin:string|boolean,
    keyNormal: boolean|string
}