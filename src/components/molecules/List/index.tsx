import * as S from "./styles";
import { Table, TablePaginationConfig } from "antd";
import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { columns } from "./columns";
import { PostsTypes } from "contexts/home.types";
import { useState } from "react";

export type ListTypes = {
  results?: PostsTypes[];
  totalResults?: number;
  onSorter: (sorter: SorterResult<object>) => void;
  onPagination: (page: number) => void;
};

const List = ({ results, totalResults, onSorter, onPagination }: ListTypes) => {
  const [defaultOrder, setDefaultOrder] = useState<string | undefined>(
    undefined
  );
  const [defaultPagination, setDefaultPagination] = useState(1);

  const handleChangeTable = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<object>
  ) => {
    const { current } = pagination;
    const { order } = sorter;

    if (current !== defaultPagination) {
      setDefaultPagination(current);
      onPagination(current);
    }

    if (order !== defaultOrder) {
      setDefaultOrder(order);
      onSorter(sorter);
    }
  };

  return (
    <S.Wrapper>
      <S.AntdWrapper>
        <Table
          dataSource={results}
          columns={columns}
          pagination={{
            showSizeChanger: false,
            showQuickJumper: false,
            total: totalResults,
          }}
          size="small"
          onChange={handleChangeTable}
        />
      </S.AntdWrapper>
      <S.FooterInformation>total results {totalResults}</S.FooterInformation>
    </S.Wrapper>
  );
};

export default List;
