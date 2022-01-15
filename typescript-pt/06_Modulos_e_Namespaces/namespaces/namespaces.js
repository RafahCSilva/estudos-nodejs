"use strict";
// concatenando outputs
//   tsc -w --outfile namespaces.js geometriaRect.ts geometriaCirc.ts namespaces.ts
//   tsc -w --outfile namespaces.js namespaces.ts
// Ou por referencia do compilador
/// <reference path="geometriaCirc.ts"/>
/// <reference path="geometriaRect.ts"/>
// namespace Geometria {
//   export namespace Area {
//     const PI: number = 3.14
//     export function areaCircuferencia(raio: number): number {
//       return PI * Math.pow(raio, 2)
//     }
//     export function areaRetangulo(base: number, altura: number): number {
//       return base * altura
//     }
//   }
// }
console.log(Geometria.Area.circuferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
//# sourceMappingURL=namespaces.js.map