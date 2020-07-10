import { useCallback, useState } from 'react';

type Return = [boolean, () => void, () => void];

function useToggle(initialState: boolean): Return {
  const [on, setOn] = useState<boolean>(initialState);

  const handleOn = useCallback(() => {
    setOn(true);
  }, []);

  const handleOff = useCallback(() => {
    setOn(false);
  }, []);

  return [on, handleOn, handleOff];
}

export default useToggle;
