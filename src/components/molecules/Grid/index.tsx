import * as S from "./styles";
import Card from "components/atoms/Card";
import { Pagination } from "antd";
import { PostsTypes } from "contexts/home.types";

export type GridTypes = {
  results?: PostsTypes[];
  totalResults?: number;
  onChangePage?: (page: number) => void;
};

const Grid = ({ results, totalResults, onChangePage }: GridTypes) => {
  return (
    <S.Wrapper>
      <S.Cards>
        {results.map((result) => (
          <Card
            key={result.id}
            title={result.title}
            subtitle={result.author}
            description={result.body}
            date={result.created_at}
          />
        ))}
      </S.Cards>
      <S.Footer>
        <S.FooterInformation>total results {totalResults}</S.FooterInformation>
        <Pagination
          size="small"
          total={totalResults}
          onChange={(page: number) => onChangePage(page)}
          showSizeChanger={false}
          showQuickJumper={false}
        />
      </S.Footer>
    </S.Wrapper>
  );
};

export default Grid;
