import prisma from "@/lib/prismadb";

export async function getMeetings() {
  try {
    const meetings = await prisma.meeting.findMany({
      select: {
        id: true,
        place: true,
        date: true,
        leader: {
          select: {
            name: true,
          },
        },
      },
    });
    return meetings;
  } catch (error) {
    console.log(error);
  }
}
