import { BehaviorSubject } from 'rxjs';

export interface IPersonalInformation {
  avatarBase64: string | null;
  avatarName: string | null;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: number | null;
  phoneNumber: number | null;
  resumeBase64: string | null;
  resumeName: string | null;
  portfolio: string;
  referralName: string | null;
  jobRelatedUpdates: boolean | null;
}

// export interface IJobRoles {
//   id: number;
//   JobRoleName: string;
//   value: boolean;
// }

export interface IJobRoles {
  JobRoleNames: string[];
  values: boolean[];
}

// export interface ITechnologies {
//   id: number;
//   technologyName: string;
//   value: boolean;
// }
export interface ITechnologies {
  technologyNames: string[];
  values: boolean[];
}

export interface IUserEducationalQualifications {
  aggregatePercentage: number | null;
  passingYear: number | null;
  qualification: string | null;
  stream: string | null;
  collegeName: string | null;
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
  job_roles: string[];
  isExpiring: boolean;
  isExpiringTitle: string;
  isExtraRoles: boolean;
  isExtraRolesTitle: string | null;
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
