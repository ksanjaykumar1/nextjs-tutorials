import TaskForm from '@/components/TaskForm';
import TaskFormCustom from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';

const TaskPage = async() => {
  return (
    <div className='max-w-lg'>
      {/* <TaskForm /> */}
      <TaskFormCustom/>
      <TaskList />
    </div>
  );
};

export default TaskPage;
