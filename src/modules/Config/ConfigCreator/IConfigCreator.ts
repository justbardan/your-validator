import { IBasicValidatorsOptions } from '../../../types/validatorsOptions/IBasicValidatorsOptions';
import { IEmailValidatorOptions } from '../../../types/validatorsOptions/IEmailValidatorOptions';
import { ILinkValidatorOptions } from '../../../types/validatorsOptions/ILinkValidatorOptions';
import { IPasswordValidatorOptions } from '../../../types/validatorsOptions/IPasswordValidatorOptions';

export interface IConfigCreator {
    isEnabledEmailValidator: boolean;
    isEnabledPasswordValidator: boolean;
    isEnabledLinkValidator: boolean;

    emailValidatorOptions: IEmailValidatorOptions;
    passwordValidatorOptions: IPasswordValidatorOptions;
    linkValidatorOptions: ILinkValidatorOptions;

    basicValidatorsOptions: IBasicValidatorsOptions;
}
