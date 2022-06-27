import { memo } from "react";
import styled from "styled-components";

export const PrefectureCheckBox = memo((props) => {
  const { prefectureLists, onChange } = props;

  return (
    <Container>
      {prefectureLists.map((prefecture, index) => (
        <CheckBox key={index}>
          <input
            id={prefecture.prefName}
            type="checkbox"
            value={prefecture.prefCode}
            onChange={onChange}
          />
          <label>{prefecture.prefName}</label>
        </CheckBox>
      ))}
    </Container>
  );
});

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: space-between;
`;
const CheckBox = styled.div`
  padding: 10px 5px;
`;
