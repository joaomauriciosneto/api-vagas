import { UserRepository } from "../../user/repositories/user.repository";
import { VagaModel } from '../../../models/vaga.model'

interface CreateVagaDTO {
  descricao: string;
  empresa: string;
  dtLimite: Date;
  indAtivo: boolean;
  maxCandidatos?: number;
  idRecrutador: string;
}

export class CreateVagaUseCase {
  public async execute(data: CreateVagaDTO) {
    const usuarioRepository = new UserRepository();
    const result = await usuarioRepository.get(data.idRecrutador);

    if(!result) {
      return null
    }

    const vaga = new VagaModel(
      data.descricao,
      data.empresa,
      data.dtLimite,
      data.indAtivo,
      result,
      data.maxCandidatos
    )

    
  }
}