import React from "react"
import { Container } from './styles'

import Aside from "../Aside"
import MainHeader from "../MainHeader"
import Content from "../Content"

const Layout: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  )
}

export default Layout
