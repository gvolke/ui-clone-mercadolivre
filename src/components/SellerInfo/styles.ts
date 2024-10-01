import styled, { css } from "styled-components";
import { HiOutlineChatAlt2, HiOutlineClock, HiThumbUp } from "react-icons/hi";

export const Container = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  margin: 15px;
  border-radius: 8px;
`;

export const Seller = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 12px;
    color: var(--color-gray);

    span {
      color: var(--color-black);
      font-weight: 600;
    }
  }
`;

export const SellerStatus = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    margin-right: 5px;
  }

  .title {
    color: var(--color-green);
    font-size: 14px;
    font-weight: 600;
  }

  .subtitle {
    color: var(--color-gray);
    font-size: 12px;
    font-weight: 400;
  }
`;

const iconCSS = css`
  width: 18px;
  height: 16px;
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationTermometer = styled.ol`
  list-style: none;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 7px;
  padding: 0 4px;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background: var(--reputation-1);
    }

    &:nth-child(2) {
      background: var(--reputation-2);
    }

    &:nth-child(3) {
      background: var(--reputation-3);
    }

    &:nth-child(4) {
      background: var(--reputation-4);
    }

    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 14px;
      font-weight: 600;
      height: 30px;
    }

    > span {
      font-size: 11px;
      color: var(--color-lightgray);
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const SellerStatusIcon = styled(HiThumbUp)`
  width: 16px;
  height: 16px;
  color: var(--color-green);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 600;
  padding: 12px 10px;
  margin-top: 10px;
  border-radius: 6px;
  height: 35px;

  color: var(--color-blue);

  background: #4189e626;

  cursor: pointer;
`;
