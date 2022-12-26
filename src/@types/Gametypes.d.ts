interface BoardProps {
  width: string;
  height: string;
  bg: string;
  index: NotionIndex;
  children?: React.ReactElement | React.ReactNode;
}

type NotionIndex = {
  x: string;
  y: string;
};
