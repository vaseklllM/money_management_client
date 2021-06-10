import React, { ReactElement } from "react"
import { txt } from "../../../utils"
import classes from './style.module.scss'

interface Props {
  className?: string
}

export default function BriefcaseIcon(props: Props): ReactElement {
  const { className } = props

  return (
    <svg
      focusable='false'
      data-icon='bar-chart'
      width='1em'
      height='1em'
      fill='currentColor'
      aria-hidden='true'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      className={txt.join([className, classes.icon ])}
    >
      <g>
        <path d='m497 120.5h-135.625v-29.808c0-33.397-27.171-60.567-60.567-60.567h-89.615c-33.396 0-60.567 27.17-60.567 60.567v29.808h-135.626c-8.284 0-15 6.716-15 15v272.5c0 40.735 33.141 73.875 73.875 73.875h364.25c40.734 0 73.875-33.14 73.875-73.875v-272.5c0-8.284-6.716-15-15-15zm-206.965 195.75c0 18.767-15.269 34.035-34.035 34.035s-34.035-15.268-34.035-34.035v-34.035h68.07zm15-64.035h-98.07c-8.284 0-15 6.716-15 15v27.247c-87.228-18.932-152.617-75.51-161.03-143.962h450.129c-8.413 68.452-73.801 125.03-161.029 143.963v-27.247c0-8.285-6.716-15.001-15-15.001zm-124.41-161.523c0-16.855 13.713-30.567 30.567-30.567h89.615c16.854 0 30.567 13.712 30.567 30.567v29.808h-150.75v-29.808zm301.375 317.308c0 24.193-19.683 43.875-43.875 43.875h-364.25c-24.192 0-43.875-19.682-43.875-43.875v-180.146c12.11 17.317 27.724 33.308 46.587 47.455 32.687 24.515 72.592 41.535 116.022 49.932 4.386 31.065 31.134 55.043 63.391 55.043s59.005-23.978 63.391-55.043c43.43-8.397 83.334-25.417 116.022-49.932 18.863-14.147 34.477-30.139 46.587-47.455z' />
      </g>
    </svg>
  )
}
