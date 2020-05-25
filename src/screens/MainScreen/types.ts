export interface IEducationState {
    readonly data: IEducation[];
    readonly errors: object;
    readonly universities: [];
}

export interface IEducation {
    university: string,
    startYear: Date,
    endYear: Date,
    degree: string,
    field: string,
    grade: string
}
