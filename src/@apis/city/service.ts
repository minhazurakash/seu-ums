// import { IBaseResponse, IdType } from '@lib/interfaces';
// import { AxiosInstance } from '@lib/config';
// import { $$, ErrorHandler } from '@lib/utils';
// import { ICitiesResponse, ICityCreate, ICityFilter, ICityResponse, ICityUpdate } from './interfaces';

// const END_POINT: string = '/cities';

// export const CityService = {
//   NAME: END_POINT,
//   async create(payload: ICityCreate): Promise<ICityResponse> {
//     try {
//       const data = await AxiosInstance.post(END_POINT, payload);
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
//   async filter(options: ICityFilter): Promise<ICitiesResponse> {
//     try {
//       const data = await AxiosInstance.get(`${END_POINT}?${$$.queryNormalizer(options)}`);
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
//   async filterById(id: string): Promise<ICityResponse> {
//     try {
//       if (!id) return { data: null } as any;
//       const data = await AxiosInstance.get(`${END_POINT}/${id}`);
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
//   async update(payload: ICityUpdate): Promise<ICityResponse> {
//     try {
//       const data = await AxiosInstance.patch(`${END_POINT}/${payload.id}`, payload.data);
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
//   async delete(id: string): Promise<ICityResponse> {
//     try {
//       const data = await AxiosInstance.delete(`${END_POINT}/${id}`);
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
//   async bulkDelete(ids: IdType[]): Promise<IBaseResponse> {
//     try {
//       const data = await AxiosInstance.delete(`${END_POINT}/bulk`, {
//         data: { ids },
//       });
//       return Promise.resolve(data?.data);
//     } catch (error) {
//       throw ErrorHandler(error);
//     }
//   },
// };
