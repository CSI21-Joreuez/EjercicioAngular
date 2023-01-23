import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/servicios/services.service';
import { Juguete } from '../../../../interfaces/juguetes/juguete';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  detallesJuguete = this.fb.group({
    id:[0],
    nombre: ['', Validators.required],
    descripcion: [''],
    edad: [0],
    importe: [0],
  });
  documentId: string = '';
  Juguete: any;
  constructor
  (
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: ServicesService
  ) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.fire.getOne('juguetes', this.documentId).subscribe((resp: any) => { 
      console.log(resp.payload.data());
      this.detallesJuguete.setValue(resp.payload.data() );
    });
  }

}
