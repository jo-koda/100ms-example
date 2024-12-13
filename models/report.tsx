import { TopCountry } from './country'

export interface Report {
  ageGroups?: {
    '13To17Years': number
    '18To29Years': number
    '30To49Years': number
    '50To64Years': number
    '65YearsAndAbove': number
  }
  topCountries?: TopCountry[]
}
