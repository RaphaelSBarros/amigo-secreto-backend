import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type GetAllFilters = { id_event: number; id_group?: number };
export const getAll = async (filters: GetAllFilters) => {
  try {
    return await prisma.eventPeople.findMany({ where: filters });
  } catch (err) {
    return false;
  }
};

type getOneFilters = { id: number; id_event: number; id_group?: number; cpf?: string };
export const getOne = async (filters: getOneFilters) => {
  try {
    return await prisma.eventPeople.findFirst({ where: filters})
  } catch (err) {
    return false;
  }
};
