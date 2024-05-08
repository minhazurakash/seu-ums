import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type ToggleType = (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;

function useToggle(initValue = false): [boolean, { set: (value: boolean) => void; toggle: ToggleType }] {
  const router = useRouter();
  const url = router?.asPath?.split('?')[0];
  const [value, setValue] = useState<boolean>(initValue);
  useEffect(() => {
    setValue(false);
  }, [url]);

  const toggle: ToggleType = (e) => {
    e.preventDefault();
    setValue((flag) => !flag);
  };

  return [value, { set: setValue, toggle }];
}

export default useToggle;
