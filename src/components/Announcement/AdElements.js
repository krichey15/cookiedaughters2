import styled from '@emotion/styled';
import { breakpoints } from '../../utils/styles';

export const AdContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const AdBanner = styled.img`
    width: 100%;

    @media screen and (max-width: ${breakpoints.m}px) {
    width: 150%;
  }
`