import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import { Desktop, Mobile } from "../../styles/globalStyles";
import { Wrapper } from "./Slider.styles";
import { SliderLinksWrapper } from "./SliderLinks/SliderLinksWrapper";
import { useModals } from "../../hooks/useModals";

export const Slider = () => {
  const { toShowNav, hideModalCreate, hideNav } = useModals();

  return (
    <Wrapper navigationClicked={toShowNav}>
      {toShowNav ? <ProfileMenu /> : null}
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
