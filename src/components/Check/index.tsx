import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import CheckSvg from '@assets/check.svg'
import PurpleSvg from '@assets/purple.svg'

export default function Like() {
  const [isLiked, setIsLiked] = useState(false)

  const handleLikePress = () => {
    setIsLiked(!isLiked)
  }

  return (
    <TouchableOpacity onPress={handleLikePress}>
      {isLiked ? <PurpleSvg /> : <CheckSvg />}
    </TouchableOpacity>
  )
}
