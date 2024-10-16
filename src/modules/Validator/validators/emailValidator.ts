import { IEmailValidatorOptions } from '../../../types/validatorsOptions/IEmailValidatorOptions';

export type TEmailValidatorSignature = (data: string, options?: IEmailValidatorOptions) => boolean;

export function emailValidator(basicEmailValidatorOptions: IEmailValidatorOptions): TEmailValidatorSignature {
    return function (data, options?) {
        const basicOptions: IEmailValidatorOptions = { ...basicEmailValidatorOptions } as const;

        console.log(data, '\t', basicOptions, '\t', options ? options : '');
        return true;
    };
}
