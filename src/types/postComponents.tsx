import type { ReactNode } from 'react'

export interface MdxComponent {
  children: ReactNode
  className?: string
}

export interface LinkProps extends MdxComponent {
  href: string
}

export interface blockQuoteProps extends Omit<MdxComponent, 'children'> {
  children: {
    props: {
      children: string
    }
  }
}
