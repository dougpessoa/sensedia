import Header from "components/molecules/Header";
import List from "components/molecules/List";
import Grid from "components/molecules/Grid";
import * as S from "./styles";
import { useState } from "react";
import { useHome } from "contexts/home";

const Content = () => {
  const [formatView, setFormatView] = useState(1);
  const {
    loading,
    postsInList,
    totalResults,
    postsInCards,
    handlePaginate,
    handleListSort,
  } = useHome();

  return (
    <S.Main>
      <S.Wrapper>
        <Header selectionView={(value: number) => setFormatView(value)} />
        {loading ? (
          <S.LoadingWrapper>
            <S.Loading />
          </S.LoadingWrapper>
        ) : formatView === 1 ? (
          <List
            results={postsInList}
            totalResults={totalResults}
            onSorter={({ order }) => handleListSort(order)}
            onPagination={handlePaginate}
          />
        ) : (
          <Grid
            results={postsInCards}
            totalResults={totalResults}
            onChangePage={handlePaginate}
          />
        )}
      </S.Wrapper>
    </S.Main>
  );
};

export default Content;
