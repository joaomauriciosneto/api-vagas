import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { UsuarioModel } from "../../../models/usuario.model";
import { VagaModel } from "../../../models/vaga.model";
import { VagaEntity } from "../../../shared/entities/vaga.entity";

export class VagaRepository {
  private repository = DatabaseConnection.connection.getRepository(VagaEntity);

  public async create(vaga: VagaModel) {
    const vagaEntity = this.repository.create({
      id: vaga.id,
      descricao: vaga.descricao,
      dtLimite: vaga.dtLimite,
      indAtivo: vaga.indAtivo,
      idRecrutador: vaga.recrutador.id,
      maxCandidatos: vaga.maxCandidatos,
    });

    const result = await this.repository.save(vagaEntity);

    return this.mapEntityToModel(result);
  }

  private mapEntityToModel(vagaEntity: VagaEntity) {
    const recrutador = UsuarioModel.create(
      vagaEntity.recrutador.id,
      vagaEntity.recrutador.nome,
      vagaEntity.recrutador.username,
      vagaEntity.recrutador.tipo,
      vagaEntity.recrutador.senha,
      vagaEntity.recrutador.empresa
    );

    const vaga = VagaModel.create(
      vagaEntity.id,
      vagaEntity.descricao,
      vagaEntity.recrutador.empresa,
      vagaEntity.dtLimite,
      vagaEntity.indAtivo,
      recrutador,
      vagaEntity.maxCandidatos
    );

    return vaga;
  }
}
