export declare function hashPassword(password: string): Promise<string>;
export declare function comparePassword(inputPassword: string, hashedPassword: string): Promise<boolean>;
