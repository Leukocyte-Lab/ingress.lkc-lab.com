/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.component.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}

interface ImportMetaEnv {
  readonly VITE_TYPEKIT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
