import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
  transform: translate(-20%, -20%);
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
  }

  span {
    font-weight: 700;
  }
`;

interface IProfileDataProps {
  firstName: string;
  lastName: string;
  username: string;
}

export const ProfileData = ({
  firstName,
  lastName,
  username,
}: IProfileDataProps) => {
  return (
    <Wrapper>
      <h2>Profile</h2>
      <div>
        <span>Your name:</span>
        <h3>{firstName}</h3>
      </div>
      <div>
        <span>Your last name:</span>
        <h3>{lastName}</h3>
      </div>
      <div>
        <span>Your email:</span>
        <h3>{username}</h3>
      </div>
    </Wrapper>
  );
};
