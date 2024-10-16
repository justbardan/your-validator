import { IBasicValidatorsOptions } from './IBasicValidatorsOptions';

export interface IPasswordValidatorOptions extends IBasicValidatorsOptions {
    neededHasNumbers?: boolean;
}
