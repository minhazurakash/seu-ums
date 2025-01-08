import { MutationConfig, queryClient, QueryConfig } from '@lib/config';
import { useMutation, useQuery } from '@tanstack/react-query';
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

//------------------ usePreRegistrationAddDrop hook ---------------------------------
type IUsePreRegistrationAddDrop = {
  config?: MutationConfig<typeof PreRegistrationService.addDrop>;
};

export const usePreRegistrationAddDrop = ({ config }: IUsePreRegistrationAddDrop = {}) => {
  return useMutation({
    ...config,
    mutationFn: ({ semesterNumber, data }: { semesterNumber: number; data: any }) =>
      PreRegistrationService.addDrop(semesterNumber, data),
    onSettled: (res) => {
      if (!res?.success) return;
      queryClient.invalidateQueries({ queryKey: [PreRegistrationService.NAME] });
    },
  });
};
