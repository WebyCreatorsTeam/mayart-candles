export type AboutLoaderResponse = {
  continueWork: boolean;
  aboutText: AboutLoaderInformation;
};

export type AboutLoaderInformation = {
  _id: string;
  title: string;
  desc: string;
  images: AboutImageType[];
  __v: number;
};
export type AboutImageType = {
  img: string;
  _id: string;
};
