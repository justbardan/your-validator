import { IBasicValidatorsOptions } from './IBasicValidatorsOptions';

export interface IEmailValidatorOptions extends IBasicValidatorsOptions {
    neededEmailAddressProvider?: string;
}
