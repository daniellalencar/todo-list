import styles from './ContainerTodoAddActivity.module.css'
import {ChangeEvent, FormEvent, useState} from "react";

interface Props {
    adicionarAtividade: (atividade: string) => void;
}

export function ContainerTodoAddActivity({adicionarAtividade} : Props){

    const [novaAtividade, setNovaAtividade] = useState('');

    function handleCriaNovaAtividade(event: FormEvent) {
        event.preventDefault()
        adicionarAtividade(novaAtividade)
        setNovaAtividade('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNovaAtividade(event.target.value);
    }

    return (
        <div className={styles.containerTodoAddActivity}>
            <form onSubmit={handleCriaNovaAtividade} className={styles.commentForm}>
                <div className={styles.containerTodoAddActivityText}>
                        <input type="text"
                               size={50}
                        value={novaAtividade}
                        onChange={handleNewCommentChange}
                        required/>
                    <button type="submit"> Adicionar </button>
                </div>

            </form>
        </div>
    );
}
