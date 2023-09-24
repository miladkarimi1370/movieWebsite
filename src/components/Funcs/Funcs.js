export function calculateRateOfMovie(number) {
  if (number < 5) {
    return "text-danger";
  } else if (number >= 5 && number < 6) {
    return "text-white";
  } else if (number >= 6 && number < 7) {
    return "text-warning";
  } else {
    return "text-success";
  }
}
