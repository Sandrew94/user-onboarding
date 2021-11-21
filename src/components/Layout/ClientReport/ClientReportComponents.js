import React, { useEffect, useCallback, useState } from "react";
import { Wrapper, Title, Description } from "./ClientReportComponents.style";
import ClientCard from "./ClientCard/ClientCard";
import { LoadingWrapper, LsdRingDiv } from "../../Loading/Loading.style";
import axios from "axios";

export default function ClientReportComponents() {
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const infoUserHandler = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://user-onboarding-backend.herokuapp.com/Info-users"
      );

      console.log(data);
      setDataUser(data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      infoUserHandler();
    }, 1000);
    return () => clearTimeout(timer);
  }, [infoUserHandler]);

  return (
    <Wrapper>
      <Title>Clients Report</Title>
      <Description>
        THIS IS THE LIST OF THE INFO OF ALL THE CLIENTS (Will be visible only to
        the admin)
      </Description>
      {loading && (
        <LoadingWrapper>
          <LsdRingDiv></LsdRingDiv>
        </LoadingWrapper>
      )}
      {!loading && <ClientCard dataUser={dataUser} />}
      {error && (
        <div>
          Something went wrong: {error.message} - PLEASE RELOAD THE PAGE
        </div>
      )}
    </Wrapper>
  );
}
