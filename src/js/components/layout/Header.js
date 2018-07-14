import React from 'react'
import PropTypes from 'prop-types'

import Step from '../Step'
import 'components/layout/Header.scss'

const Header = ({idx = 0, title, description}) =>
  <header className="mb-4">
    <Step idx={idx} count={4}/>
    <h1 className="mb-0">{title}</h1>
    <h2 className="mb-0">{description}</h2>
  </header>

Header.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Header
