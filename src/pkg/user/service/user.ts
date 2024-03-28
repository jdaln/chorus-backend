import { User } from "../model/user";
import { hashPassword } from "../../authentication/helper/helper";

class UserService {
    private userStore: any; // Assuming userStore is of type 'any'. You should replace 'any' with the actual type.

    constructor(userStore: any) {
        this.userStore = userStore;
    }

    public async createUser(user: User): Promise<User> {
        const hash = await hashPassword(user.password);
        user.password = hash;

        // throw new Error(); 

        // Assuming 'createUser' is an async function returning a Promise.
        // Adjust as per the actual implementation of 'userStore.createUser'.
        return this.userStore.createUser(user);
    }
}

export { UserService };
