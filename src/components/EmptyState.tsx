import file from '../assets/file.svg';

import styles from './EmptyState.module.css'

export function EmptyState() {
  return(
    <div className={styles.emptyState}>
      <img src={file} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}