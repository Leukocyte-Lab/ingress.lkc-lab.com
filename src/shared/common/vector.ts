import type { Vector } from '@/shared/types/vector';

export const delta = <T extends string>(
  a: Vector<T>,
  b: Vector<T>,
  axis: keyof Vector<T>,
  returnVector = false
): number => (returnVector ? a[axis] - b[axis] : Math.abs(a[axis] - b[axis]));
