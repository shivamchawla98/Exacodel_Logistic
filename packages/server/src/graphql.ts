
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateStarterFormInput {
    gstNumber: string;
    companyName: string;
    customerRole: string;
    userType: string;
    country: string;
}

export interface CreateRegistrationInput {
    name: string;
    state: string;
    address: string;
    city: string;
    country: string;
    companyRegistrationNumber: string;
    panNumber: string;
    annualTurnOver: number;
    gstNumber: string;
    firstName: string;
    lastName: string;
    designation: string;
    mobNumber: string;
    email: string;
    website: string;
    userType?: Nullable<string>;
    companyType?: Nullable<string>;
    compBillingCode: string;
}

export interface UpdateRegistrationInput {
    name?: Nullable<string>;
    state?: Nullable<string>;
    address?: Nullable<string>;
    city?: Nullable<string>;
    country?: Nullable<string>;
    companyRegistrationNumber?: Nullable<string>;
    panNumber?: Nullable<string>;
    annualTurnOver?: Nullable<number>;
    gstNumber?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    designation?: Nullable<string>;
    mobNumber?: Nullable<string>;
    email?: Nullable<string>;
    website?: Nullable<string>;
    userType?: Nullable<string>;
    companyType?: Nullable<string>;
    compBillingCode?: Nullable<string>;
}

export interface UserStarterInfoType {
    id: number;
    gstNumber: string;
    companyName: string;
    customerRole: string;
    userType: string;
    country: string;
}

export interface Registration {
    id: string;
    name: string;
    state: string;
    address: string;
    city: string;
    country: string;
    companyRegistrationNumber: string;
    panNumber: string;
    annualTurnOver: number;
    gstNumber: string;
    firstName: string;
    lastName: string;
    designation: string;
    mobNumber: string;
    email: string;
    website: string;
    userType: string;
    companyType: string;
    compBillingCode: string;
}

export interface IQuery {
    securedResources(): string | Promise<string>;
    login(email: string, password: string): string | Promise<string>;
    getUserStarterInfo(): UserStarterInfoType[] | Promise<UserStarterInfoType[]>;
    getUserStarterInfoById(id: number): Nullable<UserStarterInfoType> | Promise<Nullable<UserStarterInfoType>>;
    getRegistration(id: number): Registration | Promise<Registration>;
    getAllRegistration(): Registration[] | Promise<Registration[]>;
}

export interface IMutation {
    createUserStarterInfo(input: CreateStarterFormInput): UserStarterInfoType | Promise<UserStarterInfoType>;
    createRegistration(input: CreateRegistrationInput): Registration | Promise<Registration>;
    updateRegistration(id: number, input: UpdateRegistrationInput): Registration | Promise<Registration>;
    deleteRegistration(id: number): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
