import { PrismaClient, type Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { search } = getQuery(event);

  let usersQuery: Prisma.UserFindManyArgs = {};

  if (search) {
    usersQuery = {
      where: {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            email: {
              contains: search,
            },
          },
        ].filter(Boolean) as Prisma.UserWhereInput[],
      },
    };
  }

  const users = await prisma.user.findMany(usersQuery);

  return {
    data: users,
  };
});
