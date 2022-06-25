import { memo } from "react";

export const PrefectureCheckBox = memo((props) => {
  const { prefectureLists, onChange } = props;

  return (
    <>
      {prefectureLists.map((prefecture, index) => (
        <span key={index}>
          <input
            id={prefecture.prefName}
            type="checkbox"
            value={prefecture.prefCode}
            onChange={onChange}
          />
          <label>{prefecture.prefName}</label>
        </span>
      ))}
    </>
  );
});
