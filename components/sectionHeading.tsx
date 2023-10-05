import React from 'react'

const SectionHeading = (props: {title: string}) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8'>{props.title}</h2>
  )
}

export default SectionHeading