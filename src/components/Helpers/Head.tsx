import React from 'react'

interface PropsHead {
  title: string;
  description: string
}

export const Head = ({ description, title }: PropsHead) => {

  React.useEffect(() => {
    document.title = title + ' | Dogs'
    document.querySelector('meta[name="description"]')?.setAttribute('Content', description || '')
  }, [])
  return (
    <></>
  )
}
