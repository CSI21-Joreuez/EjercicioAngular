export interface Provedor {
    id:number;
    data:{
        empresa :string;
        nif: string;
        nombre_propietario:string;
        direccion:string;
        ciudad:string;
        correo:string;
        telefono:string;
    }
}
