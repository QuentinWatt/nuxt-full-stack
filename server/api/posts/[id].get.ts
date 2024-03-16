import { Post, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event): Promise<Post> => {
  const id = getRouterParam(event, "id");

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true },
  });

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found.",
    });
  }

  return post;
});
