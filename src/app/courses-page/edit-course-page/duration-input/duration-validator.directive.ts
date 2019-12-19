import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appDurationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DurationValidatorDirective, multi: true }]
})
export class DurationValidatorDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);

    return valid ? null : { 'appDurationValidator': { value: control.value } };
  }

}
