import styles from './ContainerPrincipal.module.css'
import {ContainerTodoAddActivity} from "./ContainerTodoAddActivity";
import {ContainerSumario} from "./ContainerSumario";
import {ContainerAtividade} from "./ContainerAtividade";
import {useState} from "react";
import {Atividade} from "../models";
import {v4 as uuidv4} from 'uuid';

export function TodoList() {

    const [atividades, setAtividades] = useState<Atividade[]>([]);

    function adicionarAtividade(atividade: string) {
        setAtividades([...atividades, criarAtividade(atividade)]);
    }

    function onExcluirAtividade(id: string) {
        const atividadesSemAqueleQSeraDeletada = atividades.filter(atividade => {
            return id !== atividade.id;
        })
        setAtividades(atividadesSemAqueleQSeraDeletada);
    }

    function onConcluirAtividade(id: string) {
        atividades
            .filter(atividade => id == atividade.id)
            .map(atividade => atividade.isComplete = !atividade.isComplete )
        console.log( atividades
            .filter(atividade => id == atividade.id))
        setAtividades([...atividades]);
    }

    return (
        <div className={styles.containerPrincipal}>
            <ContainerTodoAddActivity adicionarAtividade={adicionarAtividade}/>
            <ContainerSumario atividades={atividades}/>
            <ContainerAtividade
                atividades={atividades}
                onExcluirAtividade={onExcluirAtividade}
                onConcluirAtividade={onConcluirAtividade}/>
        </div>
    );

    function criarAtividade(descricao: string): Atividade {
        return {
            id: uuidv4(),
            descricao,
            isComplete: false,
        };
    }
}
