import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import taskSlice from 'store/modules/task';

type Return = [boolean, (name: string) => void, (name: string) => void];

function useRunApplication(initialState: boolean): Return {
  const dispatch = useDispatch();
  const [on, setOn] = useState<boolean>(initialState);

  const handleOn = useCallback(
    (name) => {
      dispatch(taskSlice.actions.addTask({ name, active: true }));
      setOn(true);
    },
    [dispatch]
  );

  const handleOff = useCallback(
    (name: string) => {
      dispatch(taskSlice.actions.removeTask(name));
      setOn(false);
    },
    [dispatch]
  );

  return [on, handleOn, handleOff];
}

export default useRunApplication;
