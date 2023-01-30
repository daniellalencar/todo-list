import styles from './ContainerSumario.module.css';
import {Atividade} from "../models";

interface Props {
    atividades: Atividade[];
}

export function ContainerSumario({ atividades }: Props) {
    return (
        <div className={styles.containerSumario}>
            <div className="name">Tarefas criadas<span>{atividades.length}</span></div>
            <div className="name">Concluídas<span>{atividades.filter(a => a.isComplete).length} de {atividades.length}</span></div>
        </div>
    );
}
