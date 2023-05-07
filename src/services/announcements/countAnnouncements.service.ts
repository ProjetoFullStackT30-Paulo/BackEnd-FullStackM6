import prisma from "../../prisma";

export const countAnnouncementService = async () => {
  const countAnnouncements = await prisma.announcement.count();
  return countAnnouncements;
};
