import { AbstractControl } from '@angular/forms';

export function ValidateURL(control: AbstractControl) {
    if(control.value.includes('muyoc.com')){
        return {validUrl: true};
    }
    return null;
}