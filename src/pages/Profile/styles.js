import paper from "@material-ui/core/Paper";
import avatar from "@material-ui/core/Avatar";
import button from "@material-ui/core/Button";
import rating from "@material-ui/lab/Rating";
import breadcrumb from "../../assets/images/breadcrumb.jpg";
import styled from "styled-components";

export const Container = styled(paper)`
  margin: 0 auto;
  width: 90%;
  margin-top: 10px;
  padding: 20px;
  text-align: justify;

  .ProfileImageContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    font-size: 30px;
  }

  .ImageAndNameContainer {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .ProfileInfoContainer {
    padding: 20px;
    font-size: 25px;
    ul {
      padding: 0px;
    }
    svg {
      margin-right: 15px;
      vertical-align: bottom;
    }
    li {
      padding-bottom: 20px;
      align-content: center;
    }
  }

  .WorksAndSkillsContainer {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 22.5px;
    ul {
      font-weight: bold;
    }
    li {
      font-weight: lighter;
      padding-top: 10px;
      margin-left: 15px;
    }
  }

  @media (max-width: 945px) {
    padding: 10px;
    .ProfileImageContainer {
      padding: 10px;
      font-size: 25px;
    }
    .ProfileInfoContainer {
      padding: 10px;
      font-size: 20px;
    }
    .WorksAndSkillsContainer {
      padding: 10px;
      font-size: 18.5px;
    }
  }

  @media (max-width: 455px) {
    padding: 5px;
    .ProfileImageContainer {
      padding: 5px;
      font-size: 20px;
    }
    .ProfileInfoContainer {
      padding: 5px;
      font-size: 15px;
    }
    .WorksAndSkillsContainer {
      padding: 5px;
      font-size: 15.5px;
    }
  }
`;

export const ProfileImage = styled(avatar)`
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

export const Breadcrumb = styled.div`
  background-image: url(${breadcrumb});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  height: 250px;

  @media (max-width: 700px) {
    height: 200px;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
  @media (max-width: 380px) {
    height: 125px;
  }
`;

export const StyledButton = styled(button)`
  width: 180px;
  border-radius: 20px !important;
  color: #4469e0 !important;
  border: 1px solid #4469e0 !important;

  @media (max-width: 945px) {
    width: 100px;
    height: 30px;
  }
  @media (max-width: 455px) {
    width: 80px;
    height: 25px;
  }
`;

export const StyledRating = styled(rating)``;
