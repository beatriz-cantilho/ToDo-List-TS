import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return(
    <header className={styles.taskHeader}>
      <div>
        <strong>Tarefas criadas 0</strong>
        <strong>Concluídas 0</strong>
      </div>
    </header>
  )
}