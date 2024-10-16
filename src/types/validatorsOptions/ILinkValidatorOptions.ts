import { IBasicValidatorsOptions } from './IBasicValidatorsOptions';

export interface ILinkValidatorOptions extends IBasicValidatorsOptions {
    neededHTTPSProtocol?: boolean;
}
