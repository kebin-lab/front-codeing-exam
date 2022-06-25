import { useCallback, useState } from "react";
import ResasAPI from "../api";

export const usePrefecture = () => {
  const [prefectureLists, setPrefectureLists] = useState([]);
  const [datasets, setDatasets] = useState([]);

  // 都道府県一覧を取得
  const getAllPrefecture = useCallback(() => {
    ResasAPI.get("prefectures", {
      headers: { "X-API-KEY": process.env.REACT_APP_API_KEY },
    })
      .then((result) => {
        setPrefectureLists(result.data.result);
      })
      .catch((error) => console.log(error));
  });

  // 都道府県ごとの総人口データを取得
  const getPopulation = useCallback((prefCode, prefName) => {
    ResasAPI.get("population/composition/perYear", {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
      params: { prefCode: prefCode },
    })
      .then((result) => {
        const getData = result.data.result.data[0].data.map((obj) => obj.value);

        // グラフの色をランダムで作成する
        let color = { r: 0, g: 0, a: 0 };
        for (let i in color) {
          color[i] = Math.floor(Math.random() * 256);
        }
        const dataset = {
          label: prefName,
          data: getData,
          borderColor: "rgb(" + color.r + "," + color.g + "," + color.a + ")",
          backgroundColor:
            "rgba(" + color.r + "," + color.g + "," + color.a + ", 0.5)",
        };
        setDatasets([...datasets, dataset]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return {
    prefectureLists,
    getAllPrefecture,
    datasets,
    setDatasets,
    getPopulation,
  };
};
