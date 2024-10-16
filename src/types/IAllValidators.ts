import { TEmailValidatorSignature } from '../modules/Validator/validators/emailValidator';
import { TLinkValidatorSignature } from '../modules/Validator/validators/linkValidator';
import { TPasswordValidatorSignature } from '../modules/Validator/validators/passwordValidator';

export interface IAllValidators {
    emailValidator: TEmailValidatorSignature | (() => void);
    passwordValidator: TPasswordValidatorSignature | (() => void);
    linkValidator: TLinkValidatorSignature | (() => void);
}
