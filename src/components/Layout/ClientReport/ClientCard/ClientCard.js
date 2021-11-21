import React from "react";
import {
  CardData,
  CardWrapper,
  CardDataList,
  CardDataLi,
} from "./ClientCard.style";

export default function ClientCard({ dataUser }) {
  const userInfo = dataUser.map((user) => {
    const { id, fullname, email, investFrom, investTo, country } = user;

    return (
      <CardData key={Math.random() + user.id}>
        <CardDataList>
          <CardDataLi>Id: {id}</CardDataLi>
          <CardDataLi>Name & Surname: {fullname}</CardDataLi>
          <CardDataLi>Email: {email}</CardDataLi>
          <CardDataLi>
            Money he/she could invest: {investFrom}$ - {investTo}$
          </CardDataLi>
          <CardDataLi>
            Country:{" "}
            {country[0].toUpperCase() + country.slice(1, country.length)}
          </CardDataLi>
        </CardDataList>
      </CardData>
    );
  });

  return <CardWrapper>{userInfo}</CardWrapper>;
}
