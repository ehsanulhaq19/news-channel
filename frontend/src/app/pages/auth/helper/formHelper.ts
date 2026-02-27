import messages from '../../../constants/messages.json';

const { required: requiredErrors } = messages.errors;

export const fieldUpdateHandler = (
  fieldName: string,
  value: string,
  setValue: (val: string) => void,
  setValueError: (val: string) => void
): void => {
    if (!value) {
        setValueError((requiredErrors as Record<string, string>)[fieldName] || '');
    } else {
        setValueError('');
    }

    setValue(value);
};
