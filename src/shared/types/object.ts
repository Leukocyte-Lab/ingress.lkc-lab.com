import type { Optional } from './optional';
import type { Callback } from './callback';

export type GeneralObject = {
  [key: string]: Optional<
    | GeneralObject
    | string
    | number
    | boolean
    | Callback
    | Array<unknown>
    | any
  >;
};
