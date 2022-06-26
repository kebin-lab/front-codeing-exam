import { useEffect } from "react";

import { PopulationGraph } from "./components/PopulationGraph.js";
import { usePrefecture } from "./hooks/usePrefecture.js";
import { PrefectureCheckBox } from "./components/PrefectureCheckbox.js";
import "./App.css";

function App() {
  const {
    prefectureLists,
    datasets,
    getAllPrefecture,
    setDatasets,
    getPopulation,
  } = usePrefecture();

  const onChangePrefecture = (e) => {
    const clickedPrefectureName = e.target.id;
    const clickedPrefectureCode = e.target.value;
    const found = datasets.find(
      (element) => element.label === clickedPrefectureName
    );
    if (!found) {
      getPopulation(clickedPrefectureCode, clickedPrefectureName);
    } else {
      const newDatasets = datasets.filter(
        (element) => element.label !== clickedPrefectureName
      );
      setDatasets(newDatasets);
    }
  };

  // mound時に全ての都道府県名を取得する
  useEffect(() => {
    getAllPrefecture();
  }, []);

  return (
    <div>
      <header className="Title">
        <h2>Title</h2>
      </header>
      <main className="Main">
        <div>
          <h2 className="MainTitle">都道府県</h2>
          <div>
            <PrefectureCheckBox
              prefectureLists={prefectureLists}
              onChange={onChangePrefecture}
            />
          </div>
          <div>
            <PopulationGraph datasets={datasets} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
