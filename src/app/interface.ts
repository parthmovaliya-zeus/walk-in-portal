import { BehaviorSubject } from 'rxjs';

export interface IPersonalInformation {
  id: number;
  avatarBase64: string | null;
  avatarName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string | null;
  countryCode: number | null;
  phoneNumber: number | null;
  resumeBase64: string | null;
  resumeName: string | null;
  portfolio: string;
  referralName: string | null;
  jobRelatedUpdates: boolean | null;
}

export interface IJobRoles {
  jobRolesIds: number[];
  JobRoleNames: string[];
  values: boolean[];
}

export interface ICollages {
  collageIds: number[];
  collageNames: string[];
}

export interface IQualifications {
  qualificationIds: number[];
  qualificationNames: string[];
}

export interface IStreams {
  streamIds: number[];
  streamNames: string[];
}

export interface ITechnologies {
  technologyIds: number[];
  technologyNames: string[];
  values: boolean[];
}

export interface IUserEducationalQualifications {
  aggregatePercentage: number | null;
  passingYear: number | null;
  qualificationId: number | null;
  streamId: number | null;
  collegeId: number | null;
  otherCollageName: string | null;
  collageLocation: string;
}

export interface IUserFresher {
  otherTechnologies: string | null;
  isAppearedInTestByZeus: boolean | null;
  appearedRoleName: string | null;
}

export interface IUserExperiences {
  yearsOfExperience: number | null;
  currentCTC: number | null;
  expectedCTC: number | null;
  e_otherTechnologies: string | null;
  f_otherTechnologies: string | null;
  isInNoticePeriod: boolean | null;
  noticePeriodEnd: Date | null;
  noticePeriodLength: number | null;
  isAppearedInTestByZeus: boolean | null;
  appearedRoleName: string | null;
}

export interface IUserLogin {
  isUserLogedIn: BehaviorSubject<boolean>;
}

export interface IJobs {
  id: number;
  title: string;
  sDate: Date;
  eDate: Date;
  location: string;
  job_rolesId: number[];
  job_roles: string[];
  isExpiring: boolean;
  isExpiringTitle: string;
  isExtraRoles: boolean;
  isExtraRolesTitle: string | null;
  timeSlotsId: number[];
  timeSlots: string[];
  packages: number[];
  roleDescriptions: string[];
  requirements: string[];
  generalInstructions: string;
  instructionsForTheExam: string;
  minimumSystemRequirements: string;
  process: string;
  address: {
    name: string;
    addressLine1: string;
    area: string;
    city: string;
    pincode: string;
    phone: string;
  };
  thingsToRemember: string;
}

export interface ISuccessPage {
  startDate: Date | null | undefined;
  timeSlot: string;
  name: string;
  addressLine1: string;
  area: string;
  city: string;
  pincode: string;
  countryCode: number;
  number: number;
  thingsToRemember: string;
}

export interface IApplyInJob {
  timeSlotId: number | null;
  preference: boolean[];
}

export interface IApplyInJobBodyData {
  userId: number;
  timeSlotId: number | null;
  preference: boolean[];
  job_rolesId: number[];
}

export interface IUserDetails {
  aggregatePercentage: number;
  countryCode: number;
  currentCtc: number;
  expectedCtc: number;
  displayPicture: string;
  email: string;
  endDateOfNoticePeriod: Date;
  firstName: string;
  id: number;
  isAppliendInTestByZeus: boolean;
  isExperienced: boolean;
  isInNoticePeriod: boolean;
  lastName: string;
  phoneNumber: string;
  profileUrl: string;
  resume: string;
  roleAppliendInZeus: string;
  yearsOfExperience: number;
}

export interface ISingleJobRole {
  id: number;
  jobName: string;
  dtCreated: Date;
  dtModified: Date;
}

export interface ISingleCollage {
  id: number;
  collageName: string;
  dtCreated: Date;
  dtModified: Date;
}

export interface ISingleQualification {
  id: number;
  qualificationTitle: string;
  dtCreated: Date;
  dtModified: Date;
}

export interface ISingleStream {
  id: number;
  streamName: string;
  dtCreated: Date;
  dtModified: Date;
}

export interface ISingleTechnology {
  id: number;
  technologyName: string;
  dtCreated: Date;
  dtModified: Date;
}
