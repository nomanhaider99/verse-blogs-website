import Edit from '@/components/widgets/Edit'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const page = ({ params: { id }}: Props) => {
  return (
    <>
        <Edit
          id={id}
         />
    </>
  )
}

export default page