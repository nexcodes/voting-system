import prisma from "@/lib/prismadb";

export async function getLeaders(select = {}) {
  try {
    const leaders = await prisma.leader.findMany({
      select,
    });
    return leaders;
  } catch (error) {
    console.log(error);
  }
}
