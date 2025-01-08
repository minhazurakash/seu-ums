export interface IBaseFilter {
  query?: string;
  searchTerm?: string;
  page?: number;
  limit?: number;
  name?: string;
  filter?: string[];
  user?: IdType;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export interface IResponseMeta {
  total: number;
  page: number;
  limit: number;
  skip: number;
}

export interface IBaseResponse {
  code?: string;
  success?: boolean;
  status?: string;
  description?: string;
  statusCode?: number;
  message?: string;
  errorMessages?: string[];
  meta?: IResponseMeta;
  time?: string;
}

export interface IBaseFilterPayload {
  data: any[];
  page?: number;
  limit?: number;
  total?: number;
}
export interface CreatorInfo {
  roles: any[];
  id: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  avatar: string | null;
  gender: 'Male' | 'Female';
  phoneNumber: string | null;
  username: string | null;
  email: string;
}

export interface IBaseEntity extends IBaseMetaEntity {
  id?: IdType | any;
  isActive?: boolean;
  createdBy?: CreatorInfo;
  updatedBy?: string | CreatorInfo | null;
  deletedBy?: any;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: null;
}
export type IdType = string | number;

export type IFormFinishType = 'save' | 'save_close';
export type IFormType = 'create' | 'update';

export type ILocale = 'en' | 'bn';

export interface IBaseMetaEntity {
  metaTitle?: string;
  metaTitleBn?: string;
  metaDescription?: string;
  metaDescriptionBn?: string;
  metaKeywords?: string;
  metaKeywordsBn?: string;
}

export interface IAuthUser {
  id: number;
  identifier?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
  roles?: string[];
}

export interface IUser extends IBaseEntity {
  roles: string[];
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar: string;
  phoneNumber: string;
  username: string;
  email: string;
}

export interface IGallery extends IBaseEntity {
  title: string;
  altText: string;
  url: string;
  key: string;
  fileType: string;
  fileTypeExtension: string;
  caption: string;
  source: string;
  isActive: boolean;
  orderPriority: number;
  createdById: IdType;
  updatedById: IdType;
  api: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBaseMetaData {
  title?: string;
  description?: string;
  keywords?: string;
  isFollow?: boolean;
  isIndex?: boolean;
}
