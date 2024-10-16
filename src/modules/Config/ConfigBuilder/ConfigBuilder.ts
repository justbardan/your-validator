import { IBasicValidatorsOptions } from '../../../types/validatorsOptions/IBasicValidatorsOptions';
import { IEmailValidatorOptions } from '../../../types/validatorsOptions/IEmailValidatorOptions';
import { ILinkValidatorOptions } from '../../../types/validatorsOptions/ILinkValidatorOptions';
import { IPasswordValidatorOptions } from '../../../types/validatorsOptions/IPasswordValidatorOptions';
import { ConfigCreator } from '../ConfigCreator/ConfigCreator';
import { IConfigCreator } from '../ConfigCreator/IConfigCreator';
import { IConfigBuilder } from './IConfigBuilder';

export class ConfigBuilder implements IConfigBuilder {
    private config: IConfigCreator;

    constructor() {
        this.config = new ConfigCreator();
        return this;
    }

    public includePasswordValidator(basicPasswordValidatorOptions?: IPasswordValidatorOptions): ConfigBuilder {
        this.config.isEnabledPasswordValidator = true;

        this.config.passwordValidatorOptions = {
            ...this.config.basicValidatorsOptions,
        };

        if (basicPasswordValidatorOptions) {
            this.config.passwordValidatorOptions = {
                ...this.config.passwordValidatorOptions,
                ...basicPasswordValidatorOptions,
            };
        }

        return this;
    }

    public includeEmailValidator(basicEmailValidatorOptions?: IEmailValidatorOptions): ConfigBuilder {
        this.config.isEnabledEmailValidator = true;

        this.config.emailValidatorOptions = {
            ...this.config.basicValidatorsOptions,
        };

        if (basicEmailValidatorOptions) {
            this.config.emailValidatorOptions = {
                ...this.config.emailValidatorOptions,
                ...basicEmailValidatorOptions,
            };
        }

        return this;
    }

    includeLinkValidator(basicLinkValidatorOptions?: ILinkValidatorOptions): ConfigBuilder {
        this.config.isEnabledLinkValidator = true;

        this.config.linkValidatorOptions = {
            ...this.config.basicValidatorsOptions,
        };

        if (basicLinkValidatorOptions) {
            this.config.linkValidatorOptions = {
                ...this.config.linkValidatorOptions,
                ...basicLinkValidatorOptions,
            };
        }

        return this;
    }

    changeBasicValidatorsOptions(options: IBasicValidatorsOptions): ConfigBuilder {
        this.config.basicValidatorsOptions = {
            ...this.config.basicValidatorsOptions,
            ...options,
        };

        return this;
    }

    build(): IConfigCreator {
        return this.config;
    }
}
