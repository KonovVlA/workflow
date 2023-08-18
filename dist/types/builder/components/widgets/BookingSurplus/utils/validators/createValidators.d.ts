import { Validator, ValidatorType } from "../../../../../../core/definitions";
export declare type BookingSurplusValidatorsNames = 'incidentNumFormat' | 'accountNumFormat' | 'withBookingRequired' | 'accountNumNotRepeated' | 'incidentNumNotRepeated' | 'multipleOfTen' | 'reservedSumRequired';
export declare type ValidatorsNames = ValidatorType | BookingSurplusValidatorsNames;
export declare enum ValidationError {
    REQUIRED = "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435",
    REPEATED_INCIDENT_NUM = "\u041D\u043E\u043C\u0435\u0440 \u0438\u043D\u0446\u0438\u0434\u0435\u043D\u0442\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F",
    REPEATED_ACCOUNT_NUM = "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C\u0441\u044F",
    NOT_MULTIPLE_OF_TEN = "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u043E 10",
    WRONG_FORMAT = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442"
}
export declare function createValidators(): Record<BookingSurplusValidatorsNames, Validator<ValidatorsNames>>;
