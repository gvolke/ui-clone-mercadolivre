import styled from "styled-components";
import {
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiStar,
  HiOutlineChevronDown,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  margin: 15px;
  border-radius: 8px;
`;

export const Condition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  color: var(--color-gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: var(--color-blue);
  flex-shrink: 0;

  margin-left: 16px;
  cursor: pointer;
`;

export const StarIcon = styled(HiStar)`
  width: 18px;
  height: 18px;
  margin-top: 4px;
  color: var(--color-blue);
  flex-shrink: 0;
`;

export const DownIcon = styled(HiOutlineChevronDown)`
  color: var(--color-blue);
`;

export const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    font-size: 14px;
    color: var(--color-lightgray);
  }

  > span {
    margin: 0 5px;
  }
`;

export const PriceCard = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  .title {
    color: var(--color-darkgray);
    font-size: 16px;

    span {
      color: var(--color-green);
      font-weight: 600;
    }
  }

  .description {
    color: var(--color-lightgray);
    font-size: 14px;

    span {
      color: var(--color-darkgray);
      font-weight: 400;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: var(--color-blue);
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 36px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 18px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallementsInfo = styled.div`
  display: flex;
  gap: 2px;
  font-size: 18px;
  margin-bottom: 5px;

  .text,
  .cents {
    color: var(--color-green);
  }

  .cents {
    font-size: 10px;
  }
`;

export const PaymentInfo = styled.div`
  margin-top: 6px;
  color: var(--color-blue);
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
`;

export const StockStatus = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: var(--color-darkgray);
  font-weight: 600;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-top: 30px;

  span:first-child {
    color: var(--color-darkgray);
    font-size: 16px;
  }

  span + span {
    font-weight: 600;
  }

  span:last-child {
    font-size: 14px;
    color: var(--color-lightgray);
  }
`;

export const Actions = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: 600;
  padding: 12px 10px;
  margin-top: 10px;
  border-radius: 6px;
  height: 45px;

  color: ${(props) =>
    props.solid ? "var(--color-white)" : "var(--color-blue)"};

  background: ${(props) => (props.solid ? "var(--color-blue)" : "#4189E626")};

  cursor: pointer;
`;

export const Benefits = styled.div`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    margin-bottom: 10px;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;

      span {
        color: var(--color-blue);
      }
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 17px;
  height: 17px;
  color: var(--color-gray);
  flex-shrink: 0;
`;

export const InfoIcon = styled(HiOutlineInformationCircle)`
  width: 17px;
  height: 17px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
