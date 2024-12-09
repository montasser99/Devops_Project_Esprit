import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from './models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  
  private baseUrl = 'http://192.168.33.10:8050/operator';

  constructor(private http: HttpClient) { }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}`, etudiant);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/etudiant/updateEtudiant`, etudiant);
  }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.baseUrl}`);
  }

 deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/etudiant/getEtudiantById/${id}`);
  }
}
