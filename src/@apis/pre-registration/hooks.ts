import { QueryConfig } from '@lib/config';
import { useQuery } from '@tanstack/react-query';
import { PreRegistrationService } from './service';

//---------------- usePreRegistrations hook ------------------------------------
type IUsePreRegistrations = {
  config?: QueryConfig<typeof PreRegistrationService.filter>;
};
export const usePreRegistrations = ({ config }: IUsePreRegistrations) => {
  return useQuery({
    ...config,
    queryKey: [PreRegistrationService.NAME],
    queryFn: () => PreRegistrationService.filter(),
  });
};
