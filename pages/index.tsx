import React, { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button arrow="down" appearance="primary">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка</Button>
      <P>dsfsfdsfddsfsdfsfsdfsfsdfsfsdf</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
