export interface IPersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: number | null;
  phoneNumber: number | null;
  portfolio: string;
  //   instructionalDesigner: boolean | null;
  //   softwareEngineer: boolean | null;
  //   softwareQualityEngineer: boolean | null;
  referralName: string | null;
  jobRelatedUpdates: boolean | null;
}

export interface IJobRoles {
  id: number;
  JobRoleName: string;
  value: boolean;
}
export interface ITechnologies {
  id: number;
  technologyName: string;
  value: boolean;
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
  //   javascript: boolean;
  //   angularJS: boolean;
  //   react: boolean;
  //   nodeJS: boolean;
  //   others: boolean;
  otherTechnologies: string | null;
  isAppearedInTestByZeus: boolean | null;
  appearedRoleName: string | null;
}

export interface IUserExperiences {
  yearsOfExperience: number | null;
  currentCTC: number | null;
  expectedCTC: number | null;
  //   e_javascript: false;
  //   e_angularJS: false;
  //   e_react: false;
  //   e_nodeJS: false;
  //   e_others: false;
  e_otherTechnologies: string | null;
  //   f_javascript: false;
  //   f_angularJS: false;
  //   f_react: false;
  //   f_nodeJS: false;
  //   f_others: false;
  f_otherTechnologies: string | null;
  isInNoticePeriod: boolean | null;
  noticePeriodEnd: Date | null;
  noticePeriodLength: number | null;
  isAppearedInTestByZeus: boolean | null;
  appearedRoleName: string | null;
}
