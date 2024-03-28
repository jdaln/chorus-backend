export enum Status {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
}

export enum Source {
    INTERNAL = "INTERNAL",
}

export class Role {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}

export class User {
    tenantid: number;
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    status: Status;
    source: Source;
    id: number | null;
    roles: Role[];
    totpsecret: string;
    createdat: string;
    updatedat: string;

    constructor(tenantid: number = 0, username: string = "", email: string = "", password: string = "", firstname: string = "", lastname: string = "", status: Status = Status.ACTIVE, source: Source = Source.INTERNAL, id: number | null = null, roles: Role[] = [], totpsecret: string = "", createdat: string = "", updatedat: string = "") {
        this.tenantid = tenantid;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.status = status;
        this.source = source;
        this.id = id;
        this.roles = roles;
        this.totpsecret = totpsecret;
        this.createdat = createdat;
        this.updatedat = updatedat;
    }
}
