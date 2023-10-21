function sortByName(a, b) {
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

function sortByAge(a, b) {
  const age1 = a.age;
  const age2 = b.age;

  return age1 - age2;
}

function dontSort(a, b) {
  return 0;
}

export default {
  name: sortByName,
  age: sortByAge,
  dontSort,
};
