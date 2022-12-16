import { Header } from './components/Header';
import { FormTask } from './components/FormTask';
import { EmptyState } from './components/EmptyState';
import { TaskHeader } from './components/TaskHeader';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div>
        <main>
          <FormTask />
          <TaskHeader />
          <EmptyState />
        </main>
      </div>
    </div>
  )
}

export default App
