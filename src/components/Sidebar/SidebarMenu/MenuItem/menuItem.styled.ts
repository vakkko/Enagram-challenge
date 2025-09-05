import styled from "styled-components";

export const MenuItemBox = styled.a<{ $background: boolean | undefined }>`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  & > p {
    font-family: Helvetica;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => (props.$background ? "var(--blue)" : "var(--white)")};
  }

  ${(props) =>
    props.$background &&
    `
    & > p {
    font-weight: 700;
    }

    
    margin-left:-1.2rem;
    background-color: var(--white);
    width: calc(100% + 1.2rem);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 2rem 0 2rem 1.2rem;
    position:relative;

    &::before{
    content:"";
    position:absolute;
    right:-1px;
    top:-10px;
    width:15px;
    height:10px;
    background-image:url(./images/curve-top.webp);
    
    }

    &::after{
    content:"";
    position:absolute;
    right:-1px;
    bottom:-10px;
    width:15px;
    height:10px;
    background-image:url(./images/curve-bottom.webp);
    }

  `}
`;
