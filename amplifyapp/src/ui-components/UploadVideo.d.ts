/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UploadVideoInputValues = {
    title?: string;
    description?: string;
};
export declare type UploadVideoValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadVideoOverridesProps = {
    UploadVideoGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UploadVideoProps = React.PropsWithChildren<{
    overrides?: UploadVideoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UploadVideoInputValues) => UploadVideoInputValues;
    onSuccess?: (fields: UploadVideoInputValues) => void;
    onError?: (fields: UploadVideoInputValues, errorMessage: string) => void;
    onChange?: (fields: UploadVideoInputValues) => UploadVideoInputValues;
    onValidate?: UploadVideoValidationValues;
} & React.CSSProperties>;
export default function UploadVideo(props: UploadVideoProps): React.ReactElement;
