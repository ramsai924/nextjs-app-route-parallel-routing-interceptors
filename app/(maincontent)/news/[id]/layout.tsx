import React from 'react'

function DetailsLayout({ children, modalDetails }: any) {
  return (
    <div>
        {modalDetails}
        {children}
    </div>
  )
}

export default DetailsLayout