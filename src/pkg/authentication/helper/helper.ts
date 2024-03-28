import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

export async function isPasswordCorrect(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
}
