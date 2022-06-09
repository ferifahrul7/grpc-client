import React from 'react'
import service from 'src/pingpong'
import {xhr} from "xhr2"

const index = () => {
    service()
  return (
    <div>index</div>
  )
}
export default index