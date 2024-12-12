import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  validateForm(form: FormGroup): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    Object.keys(form.controls).forEach(key => {
      const controlErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors[key] = this.getErrorMessage(keyError, controlErrors[keyError]);
        });
      }
    });

    return errors;
  }

  private getErrorMessage(errorName: string, errorValue: any): string {
    const errorMessages = {
      required: 'This field is required',
      minlength: `Minimum length is ${errorValue.requiredLength}`,
      maxlength: `Maximum length is ${errorValue.requiredLength}`,
      email: 'Invalid email address',
      pattern: 'Invalid format'
    };

    return errorMessages[errorName] || 'Invalid field';
  }
}
