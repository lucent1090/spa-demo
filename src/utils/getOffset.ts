function getOffset(totalUsers: number, currentPage: number): [number, number] {
  if (totalUsers <= 10) {
    return [0, totalUsers];
  }

  if (currentPage <= 1) {
    return [0, 10];
  }

  const totalPage = Math.round(totalUsers / 10);
  if (currentPage >= totalPage) {
    return [(totalPage - 1) * 10, (totalPage - 1) * 10 + 10];
  }

  return [(currentPage - 1) * 10, (currentPage - 1) * 10 + 10];
}

export default getOffset;
