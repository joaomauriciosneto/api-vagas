import { v4 as idVaga } from "uuid";

export class VagaModel {

  private _id: string;

  constructor(
    private _descricao: string,
    private _empresa: string,
    private _dtLimite: Date,
    private _indAtivo: boolean,
    private _maxCandidatos: number
  ) {
    this._id = idVaga();
  }

  public get id() {
    return this._id
  }

  public get descricao() {
    return this._descricao
  }

  public set descricao(descricao: string) {
    this._descricao = descricao
  }

  public get empresa() {
    return this._empresa
  }

  public set empresa(empresa: string) {
    this._empresa = empresa
  }

  public get dtLimite() {
    return this._dtLimite
  }

  public set dtLimite(dtLimite: Date) {
    this._dtLimite = dtLimite
  }

  public get indAtivo() {
    return this._indAtivo
  }

  public set indAtivo(indAtivo: boolean) {
    this._indAtivo = indAtivo
  }

  public get maxCandidatos() {
    return this._maxCandidatos
  }

  public set maxCandidatos(maxCandidatos: number) {
    this._maxCandidatos = maxCandidatos
  }

  public toJson() {
    return {
      id: this._id,
      descricao: this.descricao,
      empresa: this.empresa,
      dtLimite: this.dtLimite,
      indAtivo: this.indAtivo,
      maxCandidatos: this.maxCandidatos
    }
  }

  public static create(
    id: string,
    descricao: string,
    empresa: string,
    dtLimite: Date,
    indAtivo: boolean,
    maxCandidatos: number
  ) {
    const vaga = new VagaModel(descricao, empresa, dtLimite, indAtivo, maxCandidatos)
    vaga._id = id;

    return vaga;
  }

}