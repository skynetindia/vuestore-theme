import {
  Context,
  useUserFactory,
  UseUserFactoryParams,
} from '@vue-storefront/core';
import type { User } from '@vue-storefront/myshop-api';
import type {
  UseUserUpdateParams as UpdateParams,
  UseUserRegisterParams as RegisterParams,
} from '../types';
const userdata={
  attributes:{
    'customer.id': null,
    'customer.salutation': "",
    'customer.profile_pic': "",
    'customer.company': "",
    'customer.vatid': "",
    'customer.title': "",
    'customer.firstname': "",
    'customer.lastname': "",
    'customer.address1': "",
    'customer.address2': "",
    'customer.address3': "",
    'customer.postal': "",
    'customer.city': "",
    'customer.state': "",
    'customer.languageid': "",
    'customer.countryid': "",
    'customer.telephone': "",
    'customer.email': "",
    'customer.telefax': "",
    'customer.website': "",
    'customer.label': "",
    'customer.code': "",
    'customer.birthday': "",
    'customer.status': 0,
  }
}
const params: UseUserFactoryParams<User, UpdateParams, RegisterParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    console.log('Mocked: useUser.load');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    console.log('Mocked: useUser.logOut');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: useUser.updateUser');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (
    context: Context,
    { email, password, firstName, lastName }
  ) => {
    console.log('Mocked: useUser.register');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    console.log('Mocked: useUser.logIn');
    return userdata;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (
    context: Context,
    { currentUser, currentPassword, newPassword }
  ) => {
    console.log('Mocked: useUser.changePassword');
    return userdata;
  },
};

export const useUser = useUserFactory<User, UpdateParams, RegisterParams>(
  params
);
