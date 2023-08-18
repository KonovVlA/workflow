import { UnknownObject } from "../../definitions";
export interface FlattenOptions {
    delimiter?: string;
    preserveLastArray?: boolean;
}
/**
 * Преобразует объект в его плоскую версию.
 * @param target { object } - объект, который нужно преобразовать
 * @param options { object } - параметры преобразования
 * @param options.delimiter { string } - разделитель вложенных ключей
 * @param options.preserveLastArray { boolean } - определяет, нужно ли разбирать последний по вложенности массив
 * ** последним по вложенности является тот массив, у которого нет значений, являющихся объектом или массивом
 * @return { object } - преобразованный плоский объект
 *
 * @example
 * const obj = {
 *   a: 1,
 *   b: {
 *     c: 2,
 *     d: [3, 4],
 *   },
 * };
 * const flattened = flattenObject(obj);
 * // flattened: {
 *   a: 1,
 *   'b.c': 2,
 *   'b.d.0': 3,
 *   'b.d.1': 4,
 * }
 */
export declare function flattenObject<T extends UnknownObject>(target: T, options?: FlattenOptions): UnknownObject;
