import { format, formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatDate(date: Date) {
  return format(date, "MMMM d 'at' HH:mm'h'", {
    locale: enUS,
  })
}

export function getTimeDistanceToNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  })
}
