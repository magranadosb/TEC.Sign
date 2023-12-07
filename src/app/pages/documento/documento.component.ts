import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent {
  public myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public get firmasArr() {
    return this.myForm.get('firmas') as FormArray;
  }

  private buildForm(): void {

    this.myForm = this.formBuilder.group({
      constancia: this.formBuilder.group({
        id: [null],
        x1: ['', [Validators.required]],
        y1: ['', [Validators.required]],
        x2: ['', [Validators.required]],
        y2: ['', [Validators.required]],
        x: ['', [Validators.required]],
        y: ['', [Validators.required]],
        nHoja: ['', [Validators.required]]
      }),
      firmas: this.formBuilder.array([
        this.formBuilder.group({
          id: [null],
          x1: ['', [Validators.required]],
          y1: ['', [Validators.required]],
          x2: ['', [Validators.required]],
          y2: ['', [Validators.required]],
          x: ['', [Validators.required]],
          y: ['', [Validators.required]],
          nHoja: ['', [Validators.required]]
        })
      ])
    });

  }

  public addFirma(): void {

    this.firmasArr.push(
      this.formBuilder.group({
        id: [null],
        x1: ['', [Validators.required]],
        y1: ['', [Validators.required]],
        x2: ['', [Validators.required]],
        y2: ['', [Validators.required]],
        x: ['', [Validators.required]],
        y: ['', [Validators.required]],
        nHoja: ['', [Validators.required]]
      })
    );

  }

  public deleteFirma(index: number) {
    this.firmasArr.removeAt(index);
  }

}
