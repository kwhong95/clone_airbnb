import React from "react";
import styled, { css } from "styled-components";
import paltette from "styles/palette";
import useValidateMode from "hooks/useValidateMode";

type InputContainerProps = {
  iconExist: boolean;
  isVaild: boolean;
  useValidation: boolean;
};

const Container = styled.div<InputContainerProps>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};
    border: 1px solid ${paltette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${paltette.gray_76};
    }
    & :focus {
      border-color: ${paltette.dark_cyan};
    }
  }
  svg {
    position: absolute;
    top: 16px;
    right: 11px;
    height: 46px;
  }
  .input-error-message {
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
    color: ${paltette.tawny};
  }
  ${({ useValidation, isVaild }) =>
    useValidation &&
    !isVaild &&
    css`
      input {
        background-color: ${paltette.snow};
        border-color: ${paltette.orange};

        & :focus {
          border-color: ${paltette.orange};
        }
      }
    `}
  ${({ useValidation, isVaild }) =>
    useValidation &&
    isVaild &&
    css`
      input {
        border-color: ${paltette.dark_cyan};
      }
    `}
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  isVaild?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
}

const Input: React.FC<IProps> = ({
  icon,
  isVaild = false,
  useValidation = true,
  errorMessage,
  ...props
}) => {
  const { validateMode } = useValidateMode();

  return (
    <Container
      iconExist={!!icon}
      isVaild={isVaild}
      useValidation={validateMode && useValidation}
    >
      <input {...props} />
      {icon}
      {useValidation && validateMode && !isVaild && errorMessage && (
        <p className="input-error-message">{errorMessage}</p>
      )}
    </Container>
  );
};

export default Input;
