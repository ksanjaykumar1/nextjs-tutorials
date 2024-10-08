'use client';
import { createTaskCustom } from '@/utils/action';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create taks'}
    </button>
  );
};

const initialState = {
  message: null,
};
const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  // useEffect(() => {
  //   if (state.message === 'error') {
  //     toast.error('there was an error');
  //   } else if (state.message) {
  //     toast.success('task created');
  //   }
  // }, [state]);
  useEffect(() => {
    if (state.message === 'error') {
      console.log('error');
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created....');
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
