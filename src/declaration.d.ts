import * as React from 'react';

export interface ReactProps {
  children: React.ReactNode;
}

export type Credential = {
  email: string;
  password: string;
}

export type SignupFormData = {
  name: string;
  gender: string;
  dob: string | number;
  email: string;
  phone: string;
  job: string;
};

