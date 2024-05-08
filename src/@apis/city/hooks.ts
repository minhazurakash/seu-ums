// import { MutationConfig, queryClient, QueryConfig } from '@lib/config';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import { ICityFilter } from './interfaces';
// import { CityService } from './service';

// //---------------- useCities hook ------------------------------------
// type IUseCities = {
//   options: ICityFilter;
//   config?: QueryConfig<typeof CityService.filter>;
// };
// export const useCities = ({ options, config }: IUseCities) => {
//   return useQuery({
//     ...config,
//     queryKey: [CityService.NAME, options],
//     queryFn: () => CityService.filter(options),
//   });
// };
// export const useCitiesByCountry = ({ options, config }: IUseCities) => {
//   return useQuery({
//     ...config,
//     queryKey: [CityService.NAME, options, options?.country],
//     queryFn: () => (options?.country ? CityService.filter(options) : null),
//   });
// };

// //----------------------- useCity hook --------------------------------------
// type IUseCity = {
//   id: string;
//   config?: QueryConfig<typeof CityService.filterById>;
// };

// export const useCity = ({ id, config }: IUseCity) => {
//   return useQuery({
//     ...config,
//     queryKey: [id],
//     queryFn: () => CityService.filterById(id),
//   });
// };

// //------------------ useCreateCity hook ---------------------------------
// type IUseCreateCity = {
//   config?: MutationConfig<typeof CityService.create>;
// };

// export const useCreateCity = ({ config }: IUseCreateCity = {}) => {
//   return useMutation({
//     ...config,
//     mutationFn: CityService.create,
//     onSettled: (res) => {
//       if (!res?.success) return;
//       queryClient.invalidateQueries({ queryKey: [CityService.NAME] });
//     },
//   });
// };

// //------------------ useUpdateCity hook ----------------------------------
// type IUseUpdateCity = {
//   config?: MutationConfig<typeof CityService.update>;
// };

// export const useUpdateCity = ({ config }: IUseUpdateCity = {}) => {
//   return useMutation({
//     ...config,
//     mutationFn: CityService.update,
//     onSettled: (res) => {
//       if (!res?.success) return;
//       queryClient.invalidateQueries({ queryKey: [CityService.NAME] });
//     },
//   });
// };

// //------------------ useDeleteCity hook ----------------------------------
// type IUseDeleteCity = {
//   config?: MutationConfig<typeof CityService.delete>;
// };

// export const useDeleteCity = ({ config }: IUseDeleteCity = {}) => {
//   return useMutation({
//     ...config,
//     mutationFn: CityService.delete,
//     onSettled: (res) => {
//       if (!res?.success) return;
//       queryClient.invalidateQueries({ queryKey: [CityService.NAME] });
//     },
//   });
// };

// //------------------ useBulkUserDeleteHook ----------------------------------
// type IUseCityListBulkDelete = {
//   config?: MutationConfig<typeof CityService.bulkDelete>;
// };

// export const useCityListBulkDelete = ({ config }: IUseCityListBulkDelete = {}) => {
//   return useMutation({
//     ...config,
//     mutationFn: CityService.bulkDelete,
//     onSettled: (res) => {
//       if (!res?.success) return;
//       queryClient.invalidateQueries({
//         queryKey: [CityService.NAME],
//       });
//     },
//   });
// };
