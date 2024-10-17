import React from 'react'
import Banner from './Banner'
const FAQs = ({showBanner}) => {
  return (
    <>
    <div>
      {showBanner && <Banner title="Frequent Asked Questions" />}
    </div>
    </>
  )
}

export default FAQs
