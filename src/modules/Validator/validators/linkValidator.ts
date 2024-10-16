import { ILinkValidatorOptions } from '../../../types/validatorsOptions/ILinkValidatorOptions';

export type TLinkValidatorSignature = (data: string, options?: ILinkValidatorOptions) => boolean;

export function linkValidator(basicLinkValidatorOptions: ILinkValidatorOptions): TLinkValidatorSignature {
    return function (data, options?) {
        const basicOptions: ILinkValidatorOptions = { ...basicLinkValidatorOptions } as const;

        console.log(data, '\t', basicOptions, '\t', options ? options : '');
        return true;
    };
}
