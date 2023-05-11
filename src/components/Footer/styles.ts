import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaclaro};
  padding-top: 32px 0;
`
export const SectionLogo = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
`

export const Logos = styled.div`
  display: flex;
  margin-right; 8px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 0.05fr 0.05fr 0.05fr;
`

export const TextFooter = styled.p`
  color: ${cores.rosa};
  margin-top: 12px;
`
