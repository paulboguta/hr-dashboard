import { BiTrendingUp } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { Stat } from "./Stat";
import { Growth, Stats, Wrapper } from "./Stats.style";

export const WrapperStats = () => {
  return (
    <Wrapper>
      <Growth />
      <Stats>
        <Stat
          icon={<BiTrendingUp />}
          backgroundColor="blue"
          stat="245k"
          title="Employees"
        />
        <Stat
          icon={<BsPerson />}
          backgroundColor="#00e673"
          stat="854"
          title="Candidates"
        />
        <Stat
          icon={<RiComputerLine />}
          backgroundColor="#FFCC00"
          stat="1.54k"
          title="Interviews"
        />
      </Stats>
    </Wrapper>
  );
};
