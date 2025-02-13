import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SyllabusUnit } from '../models/unit.model';

const baseUrl = 'http://localhost:8084/units/';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor(private http: HttpClient) {}

  getAllUnits(): Observable<SyllabusUnit[]> 
  {
    return this.http.get<SyllabusUnit[]>(`${baseUrl}all-units`);
  }

  getUnitById(id: number): Observable<SyllabusUnit> {
    return this.http.get<SyllabusUnit>(`${baseUrl}get-unit-by-id/${id}`);
  }
  getUnitByTitle(title: String): Observable<SyllabusUnit> {
    return this.http.get<SyllabusUnit>(`${baseUrl}get-unit-by-title/${title}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}create_units`, data);
  }

  updateUnit(id: number, unit: SyllabusUnit): Observable<void> {
    return this.http.put<void>(`${baseUrl}update-units`, unit);
  }

  deleteUnitById(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}delete-unit/${id}`);
  }

  
 
 }