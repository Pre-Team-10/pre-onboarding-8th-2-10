interface DefaultData {
  listid: number;
  card_contents: CardContents[];
}

interface CardContents {
  id: number;
  username: string;
  subject: string;
  content: string;
  order_number: number;
}

const DEFAULT_DATA: DefaultData[] = [
  {
    listid: 1,

    card_contents: [
      {
        id: 1,
        username: "janghyun1",
        subject: "First Title",
        content: "hi, my name i janghyun1.",
        order_number: 1,
      },
      {
        id: 2,
        username: "janghyun2",
        subject: "Second Title",
        content: "hi, my name i janghyun2.",
        order_number: 2,
      },
      {
        id: 3,
        username: "janghyun3",
        subject: "Third Title",
        content: "hi, my name i janghyun3.",
        order_number: 3,
      },
    ],
  },
];

export default DEFAULT_DATA;
