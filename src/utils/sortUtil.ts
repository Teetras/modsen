export const sortArray = (array: any[], key: string) => {
  return [...array].sort((a, b) => a[key]?.localeCompare(b[key] ?? "") || 0);
};
