import { Avatar, Button, List } from "antd";
import { JoinedDI } from "../../../../types/JoinedDI";
import { CloseCircleOutlined } from "@ant-design/icons";

const DishIngredients: React.FC<{ joineds?: JoinedDI[] }> = ({ joineds }) => {
  return (
    <List size="small">
      {joineds?.map((joined) => (
        <List.Item
          actions={[
            <a onClick={() => alert("EDIT id : " + joined.id)}>edit</a>,
            <CloseCircleOutlined
              onClick={() => alert("DELETE id : " + joined.id)}
            />,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar
              // src={`https://joesch.moe/api/v1/random?key=${joined.id}`}
              />
            }
            title={<a href="#">{joined.ingredient.name}</a>}
            description={joined.id}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default DishIngredients;
