import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerReg {
    billingCode: string;
    userType: string;
    companyType: string;
    industryType: string;
    companyName: string;
    companyRegNum: string;
    country: string;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    companyPanNum: string;
    annualTurnover: string;
    gstNum: string;
    firstName: string;
    lastName: string;
    designation: string;
    email: string;
    phoneNum: number; // Changed the type to string
    phnCountryCode: string;
    companyWebsite: string;
    termsAndCondition: boolean;
}

const initialState: CustomerReg = {
    billingCode: "",
    userType: "",
    companyType: "",
    industryType: "",
    companyName: "",
    companyRegNum: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    companyPanNum: "",
    annualTurnover: "",
    gstNum: "",
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phoneNum: 123-456-7890, // Initialized as a string
    phnCountryCode: "",
    companyWebsite: "",
    termsAndCondition: false,
}

const customerRegSlice = createSlice({
    name: "customerReg",
    initialState,
    reducers: {
        setBillingCode: (state, action: PayloadAction<string>) => {
            state.billingCode = action.payload;
        },
        setUserType: (state, action: PayloadAction<string>) => {
            state.userType = action.payload;
        },
        setCompanyType: (state, action: PayloadAction<string>) => {
            state.companyType = action.payload;
        },
        setIndustryType: (state, action: PayloadAction<string>) => {
            state.industryType = action.payload;
        },
        setCompanyName: (state, action: PayloadAction<string>) => {
            state.companyName = action.payload;
        },
        setCompanyRegNum: (state, action: PayloadAction<string>) => {
            state.companyRegNum = action.payload;
        },
        setCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
        setStreetAddress: (state, action: PayloadAction<string>) => {
            state.streetAddress = action.payload;
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        setState: (state, action: PayloadAction<string>) => {
            state.state = action.payload;
        },
        setPostalCode: (state, action: PayloadAction<string>) => {
            state.postalCode = action.payload;
        },
        setCompanyPanNum: (state, action: PayloadAction<string>) => {
            state.companyPanNum = action.payload;
        },
        setAnnualTurnover: (state, action: PayloadAction<string>) => {
            state.annualTurnover = action.payload;
        },
        setGstNum: (state, action: PayloadAction<string>) => {
            state.gstNum = action.payload;
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setDesignation: (state, action: PayloadAction<string>) => {
            state.designation = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhoneNum: (state, action: PayloadAction<number>) => {
            state.phoneNum = action.payload;
        },
        setPhnCountryCode: (state, action: PayloadAction<string>) => {
            state.phnCountryCode = action.payload;
        },
        setCompanyWebsite: (state, action: PayloadAction<string>) => {
            state.companyWebsite = action.payload;
        },
        setTermAndCondition: (state, action: PayloadAction<boolean>) => {
            state.termsAndCondition = action.payload;
        },
        reset: (state) => {
            return { ...initialState };
        },
    }
});

export const {
    setBillingCode,
    setUserType,
    setCompanyType,
    setIndustryType,
    setCompanyName,
    setCompanyRegNum,
    setCountry,
    setStreetAddress,
    setCity,
    setState,
    setPostalCode,
    setCompanyPanNum,
    setAnnualTurnover,
    setGstNum,
    setFirstName,
    setLastName,
    setDesignation,
    setEmail,
    setPhoneNum,
    setPhnCountryCode,
    setCompanyWebsite,
    reset,
    setTermAndCondition,
} = customerRegSlice.actions;
export default customerRegSlice.reducer;
