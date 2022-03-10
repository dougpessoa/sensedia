import { ColumnsType } from "antd/lib/table";
import { Title, ArrowDown } from "./styles";

export const columns: ColumnsType = [
  {
    title: "POSTID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: (
      <div>
        TITLE
        <ArrowDown />
      </div>
    ),
    dataIndex: "title",
    key: "title",
    render: (text: string) => <Title>{text}</Title>,
    sorter: true,
  },
  {
    title: "AUTHOR",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "BODY",
    dataIndex: "body",
    key: "body",
    ellipsis: true,
    align: "left",
  },
  {
    title: "CREATION DATE",
    dataIndex: "created_at",
    key: "created_at",
  },
];
