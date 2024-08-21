import { Prisma, PrismaClient } from "@prisma/client";
import * as groups from "./groups";

const prisma = new PrismaClient();

type GetAllFilters = { id_event: number; id_group?: number };
export const getAll = async (filters: GetAllFilters) => {
  try {
    return await prisma.eventPeople.findMany({ where: filters });
  } catch (err) {
    return false;
  }
};

type getOneFilters = {
  id?: number;
  id_event: number;
  id_group?: number;
  cpf?: string;
};
export const getOne = async (filters: getOneFilters) => {
  try {
    return await prisma.eventPeople.findFirst({ where: filters });
  } catch (err) {
    return false;
  }
};

type PeopleCreateData = Prisma.Args<
  typeof prisma.eventPeople,
  "create"
>["data"];
export const add = async (data: PeopleCreateData) => {
  try {
    if (!data.id_group) return false;

    const group = await groups.getOne({
      id: data.id_group,
      id_event: data.id_event,
    });
    if (!group) return false;

    return await prisma.eventPeople.create({ data });
  } catch (err) {
    return false;
  }
};

type UpdateFilters = {
  id?: number;
  id_event: number;
  id_group?: number;
};
type PeopleUpdateData = Prisma.Args<
  typeof prisma.eventPeople,
  "update"
>["data"];
export const update = async (
  filters: UpdateFilters,
  data: PeopleUpdateData
) => {
  try {
    return await prisma.eventPeople.updateMany({ where: filters, data });
  } catch (err) {
    return false;
  }
};

type DeleteFilters = { id: number; id_event?: number; id_group?: number };
export const remove = async (filters: DeleteFilters) => {
  try {
    return prisma.eventPeople.delete({ where: filters })
  } catch (err) {
    return false;
  }
};
