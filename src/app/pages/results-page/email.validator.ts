import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl): {[key: string]: any} | null {
    if (!control.value)
        return null;
    const valid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(control.value);
    return valid ? null : { 'emailInvalid': { value: control.value } }
}