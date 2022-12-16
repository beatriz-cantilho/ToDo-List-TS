import { PlusCircle } from 'phosphor-react';

import styles from './FormTask.module.css'

export function FormTask() {
  return(
    <div className={styles.formTask}>
      <form>
        <div>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button type='submit'>Criar<PlusCircle /></button>
        </div>
      </form>
    </div>
  )
}