import { Prisma } from '@prisma/client';

/**
 * Interface for user query parameters.
 */
export interface IUserQueryParams {
  /**
   * Number of items to skip.
   */
  skip?: number;

  /**
   * Number of items to take.
   */
  take?: number;

  /**
   * Unique identifier of the cursor.
   */
  cursor?: Prisma.UserWhereUniqueInput;

  /**
   * Filter to apply on the users.
   */
  where?: Prisma.UserWhereInput;

  /**
   * Sorting order for the users.
   */
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
