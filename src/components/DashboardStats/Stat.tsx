import { useMemo } from "react";
import { IconContext } from "react-icons";
import { Background, StatText, StatWrapper } from "./Stats.style";

interface IStatProps {
  icon: JSX.Element;
  backgroundColor: string;
  stat: string;
  title: string;
}

export const Stat = ({ icon, backgroundColor, stat, title }: IStatProps) => {
  const iconValues = useMemo(
    () => ({
      color: "#fff",
      size: "28px",
    }),
    []
  );
  return (
    <StatWrapper data-testid="icon">
      <Background backgroundColor={backgroundColor}>
        <IconContext.Provider value={iconValues}>{icon}</IconContext.Provider>
      </Background>
      <StatText>
        <span>{title}</span>
        <div>{stat}</div>
      </StatText>
    </StatWrapper>
  );
};
