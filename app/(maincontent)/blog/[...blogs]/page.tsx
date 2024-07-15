import React from 'react'

function BlogDetails({ params }: any) {
  return (
    <div>BlogDetails {JSON.stringify(params.blogs)}</div>
  )
}

export default BlogDetails