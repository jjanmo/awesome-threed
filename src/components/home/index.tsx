import Link from 'next/link'
import * as S from './style'

export default function Home() {
  return (
    <S.Container>
      <S.Title>Awesome ThreeD </S.Title>
      <S.GridContainer>
        <Link href="/cube">
          <S.Item>3D Cube</S.Item>
        </Link>
        <Link href="#">
          <S.Item>bbb</S.Item>
        </Link>
        <Link href="#">
          <S.Item>ccc</S.Item>
        </Link>
        <Link href="#">
          <S.Item>ddd</S.Item>
        </Link>
        <Link href="#">
          <S.Item>eee</S.Item>
        </Link>
      </S.GridContainer>
    </S.Container>
  )
}
