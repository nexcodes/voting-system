import prisma from "@/lib/prismadb";

export async function getVoters() {
  try {
    const voters = await prisma.voter.findMany({
      select: {
        name: true,
        email: true,
      },
    });
    return voters;
  } catch (error) {
    console.log(error);
  }
}
