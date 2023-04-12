import { usePathname } from "../../hooks/hooks";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { Desktop, Mobile } from "../../styles/globalStyles";
import { Wrapper } from "./Slider.styles";
import { SliderLinksWrapper } from "./SliderLinks/SliderLinksWrapper";
import { useModals } from "../../hooks/useModals";

export const Slider = () => {
  const pathname = usePathname();

  const { toShowNav, hideModalCreate, hideNav } = useModals();

  return (
    <Wrapper navigationClicked={toShowNav}>
      {toShowNav ? (
        <ProfileMenu path={pathname} navigationOff={hideNav} />
      ) : null}
      <Mobile>
        {toShowNav ? (
          <SliderLinksWrapper
            modalCreateOff={hideModalCreate}
            navigationOff={hideNav}
          />
        ) : null}
      </Mobile>
      <Desktop>
        <SliderLinksWrapper
          modalCreateOff={hideModalCreate}
          navigationOff={hideNav}
        />
      </Desktop>
    </Wrapper>
  );
};
