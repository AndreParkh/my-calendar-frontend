const LENGTH_DATE = 10

type getOnlyDateProps = Date | string

export const getOnlyDate = (date: getOnlyDateProps) => {
  switch (typeof date) {
    case 'string':
      return date.slice(0, LENGTH_DATE)
    case 'object':
      return date.toISOString().slice(0, LENGTH_DATE)
    default:
      return 'null'
  }
}
