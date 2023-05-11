import daysOfWeek from "./common/daysOfWeek";
import monthsOfYear from "./common/monthsOfYear";

export default function createDateString(date: Date): string {
  const postMonth = date.getMonth();
  const postDate = date.getDate();
  const postDay = date.getDay();
  const postYear = date.getFullYear();
  return `${daysOfWeek[postDay].abv}, ${monthsOfYear[postMonth].abv} ${postDate}, ${postYear}`;
}
