import { IsEnum } from 'class-validator';

export enum Distance {
  Marathon = 'marathon',
  HalfMarathon = 'half-marathon',
  TenKm = '10km',
}

export enum Gender {
  Female = 'female',
  Male = 'male',
}

export class TimesParameters {
  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(Distance)
  distance: Distance;
}
