import styles from './ContainerAtividade.module.css'
import {Trash} from "phosphor-react";
import {Atividade} from "../models";
import {useState} from "react";

interface IProps {
    atividades: Atividade[];
    onExcluirAtividade: (id: string) => void;
    onConcluirAtividade: (id: string) => void;
}

interface CheckBoxAtividade {
    id: string;
    isEnabled: boolean;
}
type CheckboxStates = { [key: string]: boolean };
export function ContainerAtividade({ atividades, onExcluirAtividade, onConcluirAtividade }: IProps) {
    const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({});
    const handleCheckboxChange = (id: string) => {
        setCheckboxStates({
            ...checkboxStates,
            [id]: !checkboxStates[id],
        });
    };

    function handleDeleteTask(id: string ) {
        onExcluirAtividade(id);
    }

    function handleConcluirAtividade(id: string) {
        onConcluirAtividade(id);
    }

    return (
        <div className={styles.containerGeralAtividades}>
            {atividades.map(
                atividade => (
                    <div className={styles.containerAtividade} key={atividade.id}>
                        <div className={styles.radiobuttonContainer}>
                            <input
                                className={styles.radiobutton}
                                type="checkbox"
                                checked={checkboxStates[atividade.id] || false}
                                onClick={() => handleConcluirAtividade(atividade.id)}
                                onChange={() => handleCheckboxChange(atividade.id)}
                            /></div>
                        <div className={styles.containerAtividadeDescricao}>
                            <p className={(checkboxStates[atividade.id] || false) ? styles.descriptionRiscado : styles.description}>
                                {atividade.descricao}
                            </p>
                        </div>
                        <div className={styles.trashContainer}>
                            <button
                                onClick={() => handleDeleteTask(atividade.id)}
                                title="Deletar task">
                                <Trash size={24}
                                />
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
