import { IBaseResponse } from '@lib/interfaces';
interface Semester {
  semesterNumber: number;
  label: string;
}

interface Course {
  id: string;
  code: string;
  title: string;
  label: string;
}

interface OfferedSection {
  id: string;
  course: Course;
  section: number;
  credits: number;
  sectionLimit: number | null;
  facultyList: any[]; // Adjust type if faculty details are provided
  preregistrationSectionScheduleList: any | null; // Adjust type if schedule details are provided
  interestedStudentCount: number;
  token: string | null;
  token2: string | null;
  token3: string | null;
  token4: string | null;
}

interface PreregisteredSection {
  id: string;
  course: Course;
  section: number;
  credits: number;
  sectionLimit: number | null;
  facultyList: any[]; // Adjust type if faculty details are provided
  preregistrationSectionScheduleList: any | null; // Adjust type if schedule details are provided
  interestedStudentCount: number;
  token: string | null;
  token2: string | null;
  token3: string | null;
  token4: string | null;
}

export interface Preregistration {
  semester: Semester;
  preregisteringForSemester: Semester;
  currentTime: string;
  startTime: string;
  endTime: string;
  preregistrationRunning: boolean;
  minimumCreditsHaveToTakeDuringPreregistration: number;
  maximumCreditsCanTakeDuringPreregistration: number;
  maximumCreditsCanTakeByProbationaryStudentDuringAdvising: number;
  offeredSectionList: OfferedSection[];
  preregisteredSectionList: PreregisteredSection[];
  takenCredits: number;
}
export interface IPreRegistrationResponse extends IBaseResponse {
  data: Preregistration;
}
