import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../../static/assets/img/profile-photo.png"
        alt="John Doe Avatar"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
