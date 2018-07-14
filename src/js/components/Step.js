import React from 'react'
import PropTypes from 'prop-types'
import DocCircle from 'react-icons/lib/fa/dot-circle-o'
import Circle from 'react-icons/lib/fa/circle-o'

import 'components/Step.scss'


const Step = ({count = 4, idx = 0}) =>
  <ul className="list-unstyled step">
    {[...Array(count)].map((n, i) =>
      <li key={i} className="step_item">
        {(idx >= i) ? <DocCircle size={16}/> : <Circle size={16} color="#BEE1FF"/>}
        {((count - 1) > i) ? <span className="step_item_line"/> : ''}
      </li>
    )}
  </ul>

Step.propTypes = {
  count: PropTypes.number,
  idx: PropTypes.number
}


export default Step