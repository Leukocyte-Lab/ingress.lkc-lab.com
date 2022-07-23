import type { Vector } from '@/shared/types/vector';

export const vec2 = {
  delta: (a: Vector<'x' | 'y'>, b: Vector<'x' | 'y'>): number =>
    Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)),
  add: (a: Vector<'x' | 'y'>, b: Vector<'x' | 'y'>): Vector<'x' | 'y'> => ({
    x: a.x + b.x,
    y: a.y + b.y,
  }),
  minus: (a: Vector<'x' | 'y'>, b: Vector<'x' | 'y'>): Vector<'x' | 'y'> => ({
    x: a.x - b.x,
    y: a.y - b.y,
  }),
};
