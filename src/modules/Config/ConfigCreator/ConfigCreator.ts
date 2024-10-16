import { IBasicValidatorsOptions } from '../../../types/validatorsOptions/IBasicValidatorsOptions';
import { IEmailValidatorOptions } from '../../../types/validatorsOptions/IEmailValidatorOptions';
import { ILinkValidatorOptions } from '../../../types/validatorsOptions/ILinkValidatorOptions';
import { IPasswordValidatorOptions } from '../../../types/validatorsOptions/IPasswordValidatorOptions';

import { IConfigCreator } from './IConfigCreator';

export class ConfigCreator implements IConfigCreator {
    public isEnabledEmailValidator: boolean;
    public isEnabledLinkValidator: boolean;
    public isEnabledPasswordValidator: boolean;

    public basicValidatorsOptions: IBasicValidatorsOptions;

    public emailValidatorOptions: IEmailValidatorOptions;
    public linkValidatorOptions: ILinkValidatorOptions;
    public passwordValidatorOptions: IPasswordValidatorOptions;

    constructor() {
        this.isEnabledEmailValidator = false;
        this.isEnabledLinkValidator = false;
        this.isEnabledPasswordValidator = false;

        this.basicValidatorsOptions = {
            neededMaxLength: 100,
            neededMinLength: 10,
        };

        this.emailValidatorOptions = {
            ...this.basicValidatorsOptions,
            neededEmailAddressProvider: 'gmail.com',
        };

        this.passwordValidatorOptions = {
            ...this.basicValidatorsOptions,
            neededHasNumbers: false,
        };

        this.linkValidatorOptions = {
            ...this.basicValidatorsOptions,
            neededHTTPSProtocol: true,
        };
    }
}
