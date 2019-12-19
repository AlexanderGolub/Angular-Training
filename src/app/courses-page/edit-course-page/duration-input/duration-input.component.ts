import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ],
})
export class DurationInputComponent implements ControlValueAccessor {
  duration: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  get value() {
    return this.duration;
  }

  set value(value) {
    this.duration = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value) {
    this.duration = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
