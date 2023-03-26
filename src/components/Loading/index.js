import Image from 'next/image';
import * as S from "./styled";
import LoaderSrc from '../../../public/loading.gif';

export function Loading() {
  return (
    <S.Wrapper>
      <Image src={LoaderSrc} alt='loading' />
    </S.Wrapper>
  );
}