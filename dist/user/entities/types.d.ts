import { UserWithoutPasswordHash } from './user.entity';
export type UsersWithCountResponse = {
    users: UserWithoutPasswordHash[];
    count: number;
};
