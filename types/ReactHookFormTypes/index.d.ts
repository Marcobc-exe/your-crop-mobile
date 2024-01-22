import { FieldValue } from "react-hook-form";
import type {
  SubmitHandler,
  FieldValues,
  IsAny,
  FieldErrorsImpl,
  DeepRequired,
  GlobalError,
} from "react-hook-form";

type control = Control<FieldValue>;

// type handleSubmitProp = SubmitHandler<FieldValues>;
type handleSubmitProp = IntrinsicAttributes & modalPlotNameProps

type errorsProp = Partial<
  FieldValues extends IsAny<FieldValues>
    ? any
    : FieldErrorsImpl<DeepRequired<T>>
> & {
  root?: Record<string, GlobalError> & GlobalError;
};

export { control, handleSubmitProp, errorsProp };
