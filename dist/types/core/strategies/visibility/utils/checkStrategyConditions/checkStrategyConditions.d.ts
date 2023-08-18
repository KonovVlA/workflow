import { DirtyFieldsValues } from "../../../../definitions";
import { VisibilityCondition } from "../../definitions";
/**
 * Принимает массив с стиле S-выражений, а так же объект со значениями форм.
 * Проверяет объект на соответствие с переданным массивом и возвращает булевое значение.
 * Можно использовать одно условие без указание оператора вначале.
 * Значения, содержащие массив строк, сравниваются на включение.
 *
 * @example
 * checkConditionIsTrue([
 *   'and',
 *   {
 *     id: 'input',
 *     value: '^test$'
 *   },
 *   [
 *     'or',
 *     {
 *       id: 'multiselect'
 *       value: '^moscow$',
 *     },
 *     {
 *       id: 'checkbox',
 *       value: '^checked$',
 *     }
 *   ]
 * ],
 * {
 *   input: 'test',
 *   multiselect: ['moscow', 'st. petersburg'],
 *   checkbox: 'not checked'
 * }) === true
 *
 * @param condition
 * @param values
 *
 * @return boolean
 */
export declare function checkStrategyConditions(condition: VisibilityCondition, values: DirtyFieldsValues): boolean;
