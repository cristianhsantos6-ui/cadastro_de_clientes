import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/commont/http';
import { Observable } from 'rxjs';
import { Estado } from '../../../models/estado';
import { Municipio } from '../../../models/municipio';

@Injectable({
    providedIn: 'root'
})
export class UfMunicipioService {
    constructor(private http: HttpClient) { }

   listaUF (): Observable<Estado[]> {
    const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/locallidades/estados';
    return this.http.get<Estado[]>(apiUrl);
   }

   listaMunicipios(idUf: number): Observable<Municipio[]> {
    const apiUrl = 'https//servicodados.ibge.gov.br/api/v1/localidades/estado/${idUf}/municipios';
   }
}