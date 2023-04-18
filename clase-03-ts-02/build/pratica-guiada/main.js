"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userList = void 0;
const TNormalAccount = {
    keyAdmin: false,
    keyNormal: `@club${Math.random()}`
};
const TAdminAccount = {
    keyAdmin: `@admin${Math.random()}`,
    keyNormal: `@club${Math.random()}`
};
exports.userList = [{
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
];
//# sourceMappingURL=main.js.map