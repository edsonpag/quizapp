import { AbstractControl } from "@angular/forms";

export function nameValidator(control: AbstractControl): {[key: string]: any} | null {
    if (!control.value)
        return null;
    const valid = /^.+\s.+$/.test(control.value);
    return valid ? null : { 'nameInvalid': { value: control.value } }
}