import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidateURL } from '../validators/url.validator';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup;
  miPatternNombre: string = '[a-zA-Z]*';
  miPatternApellido: string = '[a-zA-Z]*';
  miPatternEmail: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.max(50), Validators.pattern(this.miPatternNombre)]],
      apellido: ['', [Validators.required, Validators.max(100), Validators.pattern(this.miPatternApellido)]],
      email: ['', [Validators.required, Validators.pattern(this.miPatternEmail), ValidateURL]]
    });
  }

  onSubmit(_datosForm) {
    console.log(_datosForm);
  }

}
