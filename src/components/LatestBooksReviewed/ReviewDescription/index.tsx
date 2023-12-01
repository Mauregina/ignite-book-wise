import { useState, useMemo } from 'react'
import { ExpandButton } from './styles'
import { Text } from '@tucupi-ui/react'

interface ReviewDescriptionProps {
  description: string
}

const MAX_SIZE = 200

export default function ReviewDescription({
  description,
}: ReviewDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const descriptionSize = description.length
  const isGreaterThanMaxSize = descriptionSize > MAX_SIZE

  const truncateDescription = useMemo(() => {
    return description.substring(0, MAX_SIZE) + '...'
  }, [description])

  function handleClick() {
    setIsExpanded((status) => !status)
  }

  return (
    <>
      {isGreaterThanMaxSize ? (
        <Text size="sm">
          {isExpanded ? description : truncateDescription}{' '}
          <ExpandButton onClick={handleClick}>
            mostrar {isExpanded ? 'menos' : 'mais'}
          </ExpandButton>
        </Text>
      ) : (
        <Text size="sm">{description}</Text>
      )}
    </>
  )
}
