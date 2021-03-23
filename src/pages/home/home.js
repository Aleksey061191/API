import React from "react";
import { PageLayout } from "../../components/pageLayout";
import { Words } from "../../features/colorsContext/colors";
import { WordContextProvider } from "../../features/colorsContext/contexts/colorContext";

const Home = () => {
  return (
    <PageLayout title="Translate">
      <WordContextProvider>
        <Words />
      </WordContextProvider>
    </PageLayout>
  );
};

export { Home };
