
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg' ;
declare module '*.jpeg' ;
declare module '*.png' ;
declare module '*.gif' ;
declare module 'webpack-bundle-analyzer';

declare const __IS_DEV__: boolean
