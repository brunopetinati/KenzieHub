import { useHistory } from "react-router-dom";

//IMAGE
import imageNotFound from "../../assets/images/image-not-found.jpg";

// STYLE
import {
  List,
  CardHeader,
  CardBody,
  CardImage,
  CardDescription,
  Button,
  Card,
} from "./styles";

const CardUser = ({ findUser }) => {
  const history = useHistory();

  const hasImage = (image) =>
    image ? (
      <CardImage src={image} alt="avatar" />
    ) : (
      <CardImage src={imageNotFound} alt="avatar not found" />
    );

  return (
    <List>
      {findUser.map((item, index) => (
        <li key={index}>
          <Card>
            <CardHeader>
              {hasImage(item.avatar_url)}
              <span>{item.name}</span>
            </CardHeader>

            <CardBody>
              {hasImage(item.avatar_url)}

              <CardDescription>
                <p>{item.course_module}</p>
                <Button
                  onClick={() => history.push(`/users/profile/${item.id}`)}
                >
                  See More
                </Button>
              </CardDescription>
            </CardBody>
          </Card>
        </li>
      ))}
    </List>
  );
};

export default CardUser;
