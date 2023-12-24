import { Prisma, User } from '@prisma/client';
import { UserWithoutPasswordHash } from './user.entity';

export type UsersWithCountResponse = {
  users: UserWithoutPasswordHash[];
  count: number;
};
