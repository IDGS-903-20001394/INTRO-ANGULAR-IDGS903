import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {  
  alumnosForm!:FormGroup;
  matricula!:number;
  nombre!:string;
  edad!:number;
  correo!:string;
  pago!:number;
  foto!:string;
  calif!:number;

  constructor(private readonly fb:FormBuilder) { 
    this.alumnosForm = this.initForm();
  }

  onSubmit(){
    //console.log('Form-> ', this.alumnosForm.value);
    this.obtenerValores();
  }

  obtenerValores(){
    const mat = this.alumnosForm.get('matricula')?.value;
    const nom = this.alumnosForm.get('nombre')?.value;
    const eda = this.alumnosForm.get('edad')?.value;
    const cor = this.alumnosForm.get('correo')?.value;
    const pag = this.alumnosForm.get('pago')?.value;
    const fot = this.alumnosForm.get('foto')?.value;
    const cal = this.alumnosForm.get('calif')?.value;

    this.matricula = mat;
    this.nombre = nom;
    this.edad = eda;
    this.correo = cor;
    this.pago = pag;
    this.foto = fot;
    this.calif = cal;
  }

  initForm(){
    return this.fb.group({
      matricula:['', [Validators.required]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      correo:[''],
      pago:[''],
      foto:[''],
      calif:['']
    });
  }
}
