import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date) {
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
}

export function getTimeDistanceToNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}
