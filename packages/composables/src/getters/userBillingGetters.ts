import { UserBillingGetters } from '@vue-storefront/core';
import type {
  UserBillingAddress as Address,
  UserBillingAddressItem as AddressItem,
  UserBillingAddressSearchCriteria,
} from '@vue-storefront/myshop-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAddresses(
  billing: Address,
  criteria?: UserBillingAddressSearchCriteria
): AddressItem[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDefault(billing: Address): AddressItem {
  return  {
    "attributes":{
      "customer.address.salutation": billing.attributes["customer.salutation"],
      'customer.address.company': billing.attributes["customer.company"],
      'customer.address.vatid': billing.attributes["customer.vatid"],
      'customer.address.title': billing.attributes["customer.title"],
    'customer.address.firstname': billing.attributes["customer.firstname"],
    'customer.address.lastname': billing.attributes["customer.lastname"],
    'customer.address.address1': billing.attributes["customer.address1"],
    'customer.address.address2': billing.attributes["customer.address2"],
    'customer.address.address3': billing.attributes["customer.address3"],
    'customer.address.postal': billing.attributes["customer.postal"],
    'customer.address.city': billing.attributes["customer.city"],
    'customer.address.state': billing.attributes["customer.state"],
    'customer.address.countryid': billing.attributes["customer.countryid"],
    'customer.address.languageid': billing.attributes["customer.languageid"],
    'customer.address.telephone': billing.attributes["customer.telephone"],
    'customer.address.telefax': billing.attributes["customer.telefax"],
    'customer.address.email': billing.attributes["customer.email"],
    'customer.address.website': billing.attributes["customer.website"],
    'customer.address.longitude': billing.attributes["customer.longitude"],
    'customer.address.latitude': billing.attributes["customer.latitude"],
    'customer.address.id': "0",
    }

  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotal(billing: Address): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPostCode(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetName(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStreetNumber(address: AddressItem): string | number {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCity(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCountry(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPhone(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getEmail(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProvince(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCompanyName(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTaxNumber(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(address: AddressItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getApartmentNumber(address: AddressItem): string | number {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isDefault(address: AddressItem): boolean {
  return false;
}

export const userBillingGetters: UserBillingGetters<Address, AddressItem> = {
  getAddresses,
  getDefault,
  getTotal,
  getPostCode,
  getStreetName,
  getStreetNumber,
  getCity,
  getFirstName,
  getLastName,
  getCountry,
  getPhone,
  getEmail,
  getProvince,
  getCompanyName,
  getTaxNumber,
  getId,
  getApartmentNumber,
  isDefault,
};
