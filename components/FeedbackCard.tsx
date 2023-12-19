'use client'

import React from 'react'
import { Card } from './ui/card'
import { CardBody } from '@nextui-org/react'

const FeedbackCard = () => {
  return (
    <Card>
      <CardBody>
        <h3 className='text-2xl font-bold'>Get started</h3>
        <p>Describe your needs so our algorithm can suggest the best agencies for you. Connect with the ones you like and hire your favourite.</p>
      </CardBody>
    </Card>
  )
}

export default FeedbackCard