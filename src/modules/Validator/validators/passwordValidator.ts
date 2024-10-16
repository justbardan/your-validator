import { IPasswordValidatorOptions } from '../../../types/validatorsOptions/IPasswordValidatorOptions';

export type TPasswordValidatorSignature = (data: string, options?: IPasswordValidatorOptions) => boolean;

export function passwordValidator(
    basicPasswordValidatorOptions: IPasswordValidatorOptions,
): TPasswordValidatorSignature {
    return function (data, options?) {
        const basicOptions: IPasswordValidatorOptions = { ...basicPasswordValidatorOptions } as const;

        console.log(data, '\t', basicOptions, '\t', options ? options : '');
        return true;
    };
}
