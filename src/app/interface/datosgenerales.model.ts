export interface DatoGeneral {
  id_datos_generales: number;
  lugar_nacimiento: string;
  sexo: Sexo;
  edad: number;
  estado_civil: EstadoCivil;
  residencia_permanente_vivienda: ResidenciaPermanenteVivienda;
  numero_piso_vivienda: number;
}

export enum EstadoCivil {
  Casado = 'CASADO',
  Conviviente = 'CONVIVIENTE',
  Convivinete = 'CONVIVINETE',
  Separado = 'SEPARADO',
  Soltero = 'SOLTERO',
  Viudo = 'VIUDO',
}

export enum ResidenciaPermanenteVivienda {
  No = 'NO',
  Si = 'SI',
}

export enum Sexo {
  F = 'F',
  M = 'M',
}
