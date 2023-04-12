import { useEffect, useState } from "react";
import { usePathname } from "../../hooks/hooks";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { IModalNavProps } from "../../types/modal.types";
import { Desktop, Mobile } from "../../styles/globalStyles";
import { Wrapper } from "./Slider.styles";
import { SliderLinksWrapper } from "./SliderLinks/SliderLinksWrapper";

type ISliderProps = Pick<
  IModalNavProps,
  "modalCreateOff" | "isShowingNavigation" | "navigationOff"
>;

export const Slider = ({
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
}: ISliderProps) => {
  const [path, setPath] = useState("");
  const pathname = usePathname();

  // check for current path on every url change
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <Wrapper navigationClicked={isShowingNavigation}>
      {isShowingNavigation ? (
        <ProfileMenu path={path} navigationOff={navigationOff} />
      ) : null}
      <Mobile>
        {isShowingNavigation ? (
          <SliderLinksWrapper
            modalCreateOff={modalCreateOff}
            navigationOff={navigationOff}
          />
        ) : null}
      </Mobile>
      <Desktop>
        <SliderLinksWrapper
          modalCreateOff={modalCreateOff}
          navigationOff={navigationOff}
        />
      </Desktop>
    </Wrapper>
  );
};
