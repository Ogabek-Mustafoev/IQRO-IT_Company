import { THeading } from "../../types";

export default function Heading({ subTitle, title }: THeading) {
  return (
    <h1 className="heading">
      {subTitle && <span className="sub-title">{subTitle}</span>}
      <br />
      {title}
    </h1>
  );
}
