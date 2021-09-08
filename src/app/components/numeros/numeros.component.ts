import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  formN: FormGroup;
  Arrnumeros: [];
  vmax: number;
  vmin: number;
  media: number;
  valores: any;
  asce: any;
  desc: any;

  constructor(private fb: FormBuilder) {
    this.InitForm();
   }

  ngOnInit(): void {
  }


  Guardar(): void{
    if (this.formN.valid){
      // this.Arrnumeros = this.formN.value.numeros;
      // this.Arrnumeros = this.formN.value.split();
      // console.log(Math.max.apply(null, this.Arrnumeros));
      this.Arrnumeros = Object.assign([], this.formN.value.numeros);
      this.vmax = Math.max.apply(null, this.Arrnumeros);
      this.vmin = Math.min.apply(null, this.Arrnumeros);
      this.Arrnumeros.sort((a, b) => a - b);
      const valorMenor = Math.floor((this.Arrnumeros.length - 1) / 2);
      const valorMayor = Math.ceil((this.Arrnumeros.length - 1) / 2);
      this.media = (this.Arrnumeros[valorMenor] + this.Arrnumeros[valorMayor]) / 2;

      localStorage.setItem('numeros', this.Arrnumeros as any);
      this.valores = localStorage.getItem('numeros');


    }else{
      console.log('No jala');
    }
  }
  asc(): void{
    this.valores = localStorage.getItem('numeros');
  }
  des(): void{
    this.valores = this.Arrnumeros.sort((a, b) => b - a);
  }
  limpiar(): void{
    localStorage.removeItem('numeros');
  }


  InitForm(): void{
    this.formN = this.fb.group({
        numeros: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      });
  }

  isValidForm(field: string): string{
    const validF = this.formN.get(field);
    return (!validF.valid && validF.touched)
    ? 'is-invalid' : validF.touched ? 'is-valid' : '';
  }

}
