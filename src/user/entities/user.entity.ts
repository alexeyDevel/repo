import { $Enums, Prisma, Team } from '@prisma/client';

export type UserWithoutPasswordHash = Omit<
  Prisma.UserGetPayload<{}>,
  'passwordhash'
>;

export class User implements UserWithoutPasswordHash {
  company_id: number;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  birth_date: Date;
  telegram: string;
  roles: $Enums.Role[];
  created_at: Date;
  updated_at: Date;
}
