export type TLinks = {
  link: string;
  href: string;
};

export type TLayer = {
  top: string;
  bottom: string;
  left: string;
  right: string;
  width: string;
  height: string;
};

export type TBtn = {
  name: string;
  width?: string;
  px?: string;
  py?: string;
  onClick?: (value: "info" | "send" | "thanks") => void;
  modal?: "info" | "send" | "thanks";
};

export type TServices = {
  title: string;
  btn: string;
};

export type THeading = {
  subTitle?: string;
  title: string;
};

export type TCard = {
  icon: string;
  title: string;
};

export type TMobileMenu = {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
};
