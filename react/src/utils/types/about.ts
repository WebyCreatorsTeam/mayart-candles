export type aboutLoaderResponse = {
  continueWork: boolean;
  aboutText: [aboutLoaderInformation];
};

export type aboutLoaderInformation = {
  _id: string;
  title: string;
  desc: string;
  images: string[];
  __v: number;
};
