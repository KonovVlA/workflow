import { UnknownObject } from "../../definitions";
export interface UnflattenOptions {
    forcePreserveNested?: boolean;
}
/**
 * Преобразует плоский объект в его версию с вложенными значениями.
 * @param target { object } - объект, который нужно преобразовать
 * @param options { object } - параметры преобразования
 * @param options.forcePreserveNested { boolean } - указывает приоритет более вложенных значений,
 * если есть несовместимость типов
 * @return { object } - преобразованный объект
 *
 * @example
 * const obj = {
 *   a: 1,
 *   'b.d.0': 2,
 *   'b.d.1': 3,
 *   b: 4,
 * };
 * const unflattened = unflattenObject(obj);
 * // unflattened: {
 *   a: 1,
 *   b: 4,
 * }
 *
 * @example
 * const obj = {
 *   a: 1,
 *   'b.d.0': 2,
 *   'b.d.1': 3,
 *   b: 4,
 * };
 * const unflattened = unflattenObject(obj, { forcePreserveNested: true });
 * // unflattened: {
 *   a: 1,
 *   b: {
 *     d: [2, 3],
 *   },
 * }
 */
export declare function unflattenObject<T extends UnknownObject>(target: T, options?: UnflattenOptions): UnknownObject;
