/// <reference types="react" />
export declare type ProductType = 'maestro' | 'mastercard' | 'mir' | 'deposit' | 'bankAccount' | 'visa';
export interface ProductProperties {
    type?: ProductType;
    accountNumber?: string;
    dp?: string;
    cardStatus?: string;
    balance?: string;
    accountStatus?: string;
    expiredDate?: string;
    expiredDateFormat?: string;
    cardNumber?: string;
    currency?: string;
}
export interface ProductOptionProps extends ProductProperties {
    title: string;
}
export declare function ProductOption(props: ProductOptionProps): JSX.Element;
