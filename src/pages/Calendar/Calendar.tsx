import { Slider } from "components/Slider/Slider";
import { Header } from "components/Header/Header";
import { IModalNavProps } from "types/modal.types";

type ICalendarProps = Pick<
  IModalNavProps,
  | "navigationToggle"
  | "modalCreateOff"
  | "isShowingNavigation"
  | "navigationOff"
>;

export const Calendar = ({
  navigationToggle,
  modalCreateOff,
  isShowingNavigation,
  navigationOff,
}: ICalendarProps) => {
  return (
    <div>
      <Header navigationToggle={navigationToggle} />
      <Slider
        modalCreateOff={modalCreateOff}
        isShowingNavigation={isShowingNavigation}
        navigationOff={navigationOff}
      />
    </div>
  );
};
