export default function capitalizeFirstLetters(str: string): string {
  return str
    .split(" ")
    .map((s) => `${s.substring(0, 1).toLocaleUpperCase()}${s.substring(1)}`)
    .join(" ");
}
