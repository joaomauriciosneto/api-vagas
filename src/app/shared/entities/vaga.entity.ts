import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({
    name: "vaga",
})
export class VagaEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    descricao: string;

    @Column()
    dtLimite: Date;

    @Column()
    indAtivo: boolean;

    @Column()
    maxCandidatos: number;

    @Column({
        name: "id_recrutador",
    })
    idRecrutador: string;

    @CreateDateColumn({
        name: "created_at",
    })
    create: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    update: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({
        name: "id_recrutador",
    })
    recrutador: UserEntity;
}
