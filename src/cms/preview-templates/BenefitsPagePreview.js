import React from 'react'
import PropTypes from 'prop-types'
import { BenefitsPageTemplate } from '../../templates/benefits-page'

const BenefitsPagePreview = ({ entry, widgetFor }) => (
  <BenefitsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

BenefitsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BenefitsPagePreview
