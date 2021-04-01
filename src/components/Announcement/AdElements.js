import styled from '@emotion/styled';
import { breakpoints } from '../../utils/styles';

export const AdContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid;
    border-bottom: 1px solid;
`

export const AdBanner = styled.img`
    width: 100%;

    @media screen and (max-width: ${breakpoints.m}px) {
    width: 150%;
  }
`