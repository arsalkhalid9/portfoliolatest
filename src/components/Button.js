import React from 'react'
import { useLightbox } from 'simple-react-lightbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({props}) => {
  const { openLightbox } = useLightbox()

  return (
    <button className="btn btn-primary" onClick={() => openLightbox(props)}>
      <span>
        <FontAwesomeIcon icon={['fas', 'images']} />
      </span>
    </button>
  )
}
export default Button