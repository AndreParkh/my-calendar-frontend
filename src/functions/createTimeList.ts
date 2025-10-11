export const createTimeList = (qtyHours: number) =>
  new Array(qtyHours).fill('').map((_, idx) => `${('0' + idx).slice(-2)}:00`)
