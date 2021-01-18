import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";

@Component({
  selector: 'sign-up-form',
  templateUrl: 'sign-up-form.component.html'
})

export class SignUpFormComponent{
  public form: FormGroup;
  public formUtils: FormUtils;

  public constructor(private FormBuilder: FormBuilder){
    this.form = this.FormBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: [null, [Validators.required]],
    }, { validator: this.passwordConfirmationValidator });

    this.formUtils = new FormUtils(this.form);
  }

  public signUpUser(){
    console.log("Formulario de SignUp enviado!");
    console.log(this.form.value);
  }

  public passwordConfirmationValidator(form: FormGroup){
    if(form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value && form.get('password').valid)
      form.get('passwordConfirmation').setErrors(null)
    else
      form.get('passwordConfirmation').setErrors({'mismatch': true})
  }


}