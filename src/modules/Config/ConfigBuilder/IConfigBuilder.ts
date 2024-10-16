import { ConfigBuilder } from './ConfigBuilder';
import { IConfigCreator } from '../ConfigCreator/IConfigCreator';

import { IEmailValidatorOptions } from '../../../types/validatorsOptions/IEmailValidatorOptions';
import { IPasswordValidatorOptions } from '../../../types/validatorsOptions/IPasswordValidatorOptions';
import { ILinkValidatorOptions } from '../../../types/validatorsOptions/ILinkValidatorOptions';
import { IBasicValidatorsOptions } from '../../../types/validatorsOptions/IBasicValidatorsOptions';

export interface IConfigBuilder {
    includeEmailValidator: (options?: IEmailValidatorOptions) => ConfigBuilder;
    includePasswordValidator: (options?: IPasswordValidatorOptions) => ConfigBuilder;
    includeLinkValidator: (options?: ILinkValidatorOptions) => ConfigBuilder;

    changeBasicValidatorsOptions: (options: IBasicValidatorsOptions) => ConfigBuilder;

    build: () => IConfigCreator;
}
