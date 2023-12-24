import { Prisma, User } from '@prisma/client';

export class Team implements Prisma.TeamGetPayload<{}> {
  id: number;
  created_at: Date;
  updated_at: Date;
  team_lead: string;
  description: string;
  // parent_team_id: number;
  project_id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  users: User[];
  // subgroups: Team[];
}
