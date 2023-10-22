import type { UserData } from "../type/users";

function sortByName(a: UserData, b: UserData): number {
  const name1 = `${a.firstName}${a.lastName}`.toUpperCase();
  const name2 = `${b.firstName}${b.lastName}`.toUpperCase();
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return 1;
  }

  return 0;
}

function sortByAge(a: UserData, b: UserData): number {
  const age1 = a.age;
  const age2 = b.age;

  return age1 - age2;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function dontSort(_a: UserData, _b: UserData): number {
  return 0;
}

const sort: Record<string, (a: UserData, b: UserData) => number> = {
  name: sortByName,
  age: sortByAge,
  dontSort,
};

export default sort;
