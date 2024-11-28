export const calculatePaginationList = (
  total_pages: number,
  page: number,
): number[] => {
  const totalPages = Math.max(total_pages, 1);
  const currentPage = Math.max(page, 1);
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, start + 4 - 1);

  if (totalPages <= 1) {
    return [1];
  }

  if (end - start + 1 < 5) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  return Array.from({ length: 5 }, (_, index) => start + index);
};
