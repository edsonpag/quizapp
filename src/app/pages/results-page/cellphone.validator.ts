import { AbstractControl } from "@angular/forms";

export function cellphoneValidator(control: AbstractControl): {[key: string]: any} | null {
    if (!control.value)
        return null;
    const valid = /^\((?!0)\d{2}\)\s9\d{4}-\d{4}$/.test(control.value);
    return valid ? null : { 'cellphoneInvalid': { value: control.value }};
}