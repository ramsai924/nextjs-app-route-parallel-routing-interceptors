import React from 'react'

function layout({ filter, latest }: any) {
  return (
    <div>
        {filter}
        <hr style={{ margin: '25px 0' }} />
        {latest}
    </div>
  )
}

export default layout