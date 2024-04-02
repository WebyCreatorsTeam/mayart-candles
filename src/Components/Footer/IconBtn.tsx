import React from 'react'

const IconBtn = ({href, children}:{href: string, children: React.ReactNode}) => {
  return (
        <a href={href} className="flex gap-3 font-normal text-lg items-center" target="_blank">
          {children}
        </a>
  )
}

export default IconBtn