export interface UpdateCustomerPropTypes {
    csrf: string,
    salutation: string,
    fname: string,
    lname: string,
    phone: string,
    userEmail: string,
    company: string,
    website: string,
    address1: string,
    address2: string,
    address3: string,
    postal: string,
    city: string,
    state: string,
    country: string
    password?: string,
    profile_pic?:string
}
