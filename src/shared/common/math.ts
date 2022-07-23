export type MathProxy = Math & { ARC_BASE: number };

/*
 * NOTE
 * `ARC_BASE` is a magic number, to approximate the circle arc on Bézier curve.
 * comes from (4 / 3) * Math.tan(Math.PI / (2 * 4)),
 * which is approximately 0.5522847498307933984022516322796.
 * pre-calculated to enhance performance and ensure precision.
 **/
export const ARC_BASE = Number(0.5522847498307935);

const Math$: MathProxy = new Proxy<MathProxy>(Math as MathProxy, {
  get(target, prop, receiver) {
    if (prop === 'ARC_BASE') return ARC_BASE;
    return Reflect.get(target, prop, receiver);
  },
});

export default Math$;
