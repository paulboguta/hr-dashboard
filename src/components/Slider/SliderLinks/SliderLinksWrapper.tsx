import { usePathname } from "hooks/hooks";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IModalNavProps } from "types/modal.types";
import { SliderLink } from "./SliderLink";

type ISliderLinksWrapperProps = Pick<
  IModalNavProps,
  "modalCreateOff" | "navigationOff"
>;

export const SliderLinksWrapper = ({
  modalCreateOff,
  navigationOff,
}: ISliderLinksWrapperProps) => {
  const [path, setPath] = useState("");
  const pathname = usePathname();
  const navigate = useNavigate();

  const onClickLink = (to: string) => {
    navigationOff?.();
    modalCreateOff?.();
    navigate(to);
  };

  // check for current path on every url change
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <>
      <SliderLink
        text="Home"
        active={path === "/dashboard"}
        onClick={() => onClickLink("/dashboard")}
        profileMenu={false}
      >
        <AiOutlineHome />
      </SliderLink>
      <SliderLink
        text="Jobs"
        active={path === "/jobs"}
        onClick={() => onClickLink("/jobs")}
        profileMenu={false}
      >
        <MdOutlineWorkOutline />
      </SliderLink>
      <SliderLink
        text="Candidates"
        active={path === "/candidates"}
        onClick={() => onClickLink("/candidates")}
        profileMenu={false}
      >
        <BsPerson />
      </SliderLink>
    </>
  );
};
