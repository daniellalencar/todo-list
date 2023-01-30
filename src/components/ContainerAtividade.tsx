import styles from './ContainerAtividade.module.css'
import {Trash} from "phosphor-react";
import {Atividade} from "../models";
import {useState} from "react";

interface IProps {
    atividades: Atividade[];
    onExcluirAtividade: (id: string) => void;
    onConcluirAtividade: (id: string) => void;
}

interface RadioButton {
    id: string;
    value: string;
}

export function ContainerAtividade({ atividades, onExcluirAtividade, onConcluirAtividade }: IProps) {

    const [selectedValue, setSelectedValue] = useState<{ [key: string]: boolean }>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue({ ...selectedValue, [event.target.id]: event.target.checked });
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
                                checked={selectedValue[atividade.id]}
                                onClick={() => handleConcluirAtividade(atividade.id)}
                                onChange={handleChange}
                            /></div>
                        <div className={styles.containerAtividadeDescricao}>
                            <p className={styles.description}>
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
