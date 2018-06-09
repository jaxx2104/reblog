import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Heading from 'components/atoms/Heading'
import Badges from 'components/atoms/Badges'
import Time from 'components/atoms/Time'

const InfoWrap = styled.div`
  border-bottom: 1px solid #e9ecef;
  margin: 2rem 0;
  padding: 1rem;
  word-break: break-word;
`

const Info = ({ path, title, date, categories }) => (
  <InfoWrap>
    <Link style={{ textDecoration: 'none' }} to={path}>
      <Heading>{title}</Heading>
      <Time date={date} />
      <Badges items={categories} />
    </Link>
  </InfoWrap>
)

export default Info
