export interface IPersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: number | null;
  phoneNumber: number | null;
  portfolio: string;
  instructionalDesigner: boolean | null;
  softwareEngineer: boolean | null;
  softwareQualityEngineer: boolean | null;
  referralName: string | null;
  jobRelatedUpdates: boolean | null;
}
