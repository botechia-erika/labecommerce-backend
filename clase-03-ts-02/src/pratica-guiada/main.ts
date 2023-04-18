
/*Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;|

evitar repetições de variveis de tipo ou (type Alias) que define tudo que este tipo tem a partir deste esqueleto
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;*/

import { TPerson } from './types/types';
import {TAccount} from './types/types';





const TNormalAccount : TAccount ={
    keyAdmin :false,
    keyNormal: `@club${Math.random()}`}
const TAdminAccount : TAccount = {
    keyAdmin : `@admin${Math.random()}`,
    keyNormal:  `@club${Math.random()}`
}
 export const userList: TPerson[] = [{
 id: "pg-U0",
 name: "fulano da silva",
 email: "fulaninho22@gmail.com",
 password: "ufulano22",
 role: TNormalAccount
},
{
    id: "pg-U1",
    name: "ciclano da silva",
    email: "ciclano@gmail.com",
    password: "adsa22",
    role: TAdminAccount
   }

]