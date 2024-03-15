import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const quentin = await prisma.user.upsert({
    where: { email: "quentin@example.test" },
    update: {},
    create: {
      email: "quentin@example.test",
      name: "Quentin",
      posts: {
        create: {
          title: "My first post",
          content: "Some test content",
          published: true,
        },
      },
    },
  });
  const sam = await prisma.user.upsert({
    where: { email: "sam@example.test" },
    update: {},
    create: {
      email: "sam@example.test",
      name: "Sam",
      posts: {
        create: {
          title: "Example post",
          content: "Test content",
          published: true,
        },
      },
    },
  });
  console.log({ quentin, sam });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
