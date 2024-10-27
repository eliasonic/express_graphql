import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// const createUser = async () => {
//   const user = await prisma.user.create({
//     data: {
//       email: "john.doe@example.com",
//       username: "jdee",
//     },
//   });

//   console.log(user);
// };

// createUser() 