import { GetValidators } from './modules/Validator';
import { ConfigBuilder } from './modules/Config';
import { IConfigCreator } from './modules/Config';

export { GetValidators, ConfigBuilder, IConfigCreator };

const validators = new GetValidators(
    new ConfigBuilder()
        .changeBasicValidatorsOptions({ neededMaxLength: Infinity, neededMinLength: 3, neededWithConsoleLog: false })
        .includeEmailValidator()
        .includeLinkValidator({ neededHTTPSProtocol: true })
        .includePasswordValidator({ neededMaxLength: 255 })
        .build(),
).all();
