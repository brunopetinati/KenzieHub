import Avatar from "@material-ui/core/Avatar";

import styled from "styled-components";

export const StyledAvatar = styled(Avatar)`
  width: 100px !important;
  height: 100px !important;
  margin-right: 15px;

  @media (max-width: 945px) {
    width: 80px !important;
    height: 80px !important;
  }
  @media (max-width: 455px) {
    width: 60px !important;
    height: 60px !important;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
