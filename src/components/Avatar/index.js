import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="/assets/img/profile-photo.png"
        alt="Uma foto minha vestido com uma camise do Star Wars e um blazer"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
