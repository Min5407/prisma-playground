import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const post: Prisma.PostCreateInput[] = [
  {
    title: "Post David",
    content: "post David description and content",
    author: {
      connect: {
        email: "david@test.com",
      },
    },
  },
  {
    title: "Post Bob",
    content: "post Bob description and content",
    author: {
      connect: {
        email: "bob@test.com",
      },
    },
  },
];
async function main() {
  console.log("Start seeding ...");
  // create a user call David
  const david = await prisma.user.upsert({
    where: { email: "david@test.com" },
    update: {},
    create: {
      email: "david@test.com",
      password: "1234455",
    },
  });

  // create a user call Bob
  const bob = await prisma.user.upsert({
    where: { email: "bob@test.com" },
    update: {},
    create: {
      email: "bob@test.com",
      password: "1234455",
      post: {
        create: {
          title: "Post No 1",
          content: "Post No 1 Description and content",
          isPublish: true,
        },
      },
    },
  });

  post.forEach(async (item) => {
    await prisma.post.create({
      data: item,
    });
  });

  console.log("End seeding ...");
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
