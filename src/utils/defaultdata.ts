interface DefaultData {
  id: number;
  username: string;
  subject: string;
  content: string;
  ordernumber: number;
}

const DEFAULT_DATA: DefaultData[] = [
  {
    id: 1,
    username: "janghyun1",
    subject: "First Title",
    content: "hi, my name i janghyun1.",
    ordernumber: 1,
  },
  {
    id: 2,
    username: "janghyun2",
    subject: "Second Title",
    content: "hi, my name i janghyun2.",
    ordernumber: 1,
  },
  {
    id: 3,
    username: "janghyun3",
    subject: "Third Title",
    content: "hi, my name i janghyun3.",
    ordernumber: 1,
  },
];

export default DEFAULT_DATA;
