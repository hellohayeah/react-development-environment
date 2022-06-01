declare module '*.ico' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}



declare module 'express-manifest-helpers'
