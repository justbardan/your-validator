import { IAllValidators } from '../../../types/IAllValidators';
import { IConfigCreator } from '../../Config';
import { emailValidator } from '../validators/emailValidator';
import { linkValidator } from '../validators/linkValidator';
import { passwordValidator } from '../validators/passwordValidator';
import { IGetValidators } from './IGetValidators';

export class GetValidators implements IGetValidators {
    private static isCreatedOneCopy: boolean = false;
    private config!: IConfigCreator;

    private validators: IAllValidators = {
        emailValidator: () => {
            throw new Error('Registry "emailValidator" module in your config.');
        },
        linkValidator: () => {
            throw new Error('Registry "linkValidator" module in your config.');
        },
        passwordValidator: () => {
            throw new Error('Registry "passwordValidator" module in your config.');
        },
    };

    constructor(config: IConfigCreator) {
        if (!GetValidators.isCreatedOneCopy) {
            GetValidators.isCreatedOneCopy = true;
            this.addConfig(config);

            if (this.config.isEnabledEmailValidator) {
                this.validators.emailValidator = emailValidator(this.config.emailValidatorOptions);
            }

            if (this.config.isEnabledPasswordValidator) {
                this.validators.passwordValidator = passwordValidator(this.config.passwordValidatorOptions);
            }

            if (this.config.isEnabledLinkValidator) {
                this.validators.linkValidator = linkValidator(this.config.linkValidatorOptions);
            }

            return this;
        }

        throw new Error('Validator has only one copy.');
    }

    public all(): IAllValidators {
        return this.validators;
    }

    private addConfig(config: IConfigCreator) {
        this.config = config;
    }
}
