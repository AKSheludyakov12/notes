
declare module "*.svg" {
    const content: any
    export default content;
  }

  declare module "*.png" {
    const content: any;
    export default content
  }

  declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.module.scss' {
  const content: any;
  export default content
}


type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
