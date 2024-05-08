export const ENUM_GENDER = {
  Male: 'Male',
  Female: 'Female',
  Others: 'Others',
};
export const genderArray = Object.values(ENUM_GENDER);

export const ENUM_STATUS = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};
export const statusArray = Object.keys(ENUM_STATUS);

export const ENUM_FAQ_TYPES = {
  FOR_JOB: 'For job',
  FOR_VISA: 'For visa',
};
export const faqTypesArray = Object.keys(ENUM_FAQ_TYPES);
