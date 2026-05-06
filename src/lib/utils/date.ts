export function getFormattedDate(date: string | Date | undefined): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
