interface DefaultData {
  list_id: number;
  list_title: string;
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
    list_id: 1,
    list_title: "To Do",
    card_contents: [],
  },
  {
    list_id: 2,
    list_title: "Doing",
    card_contents: [
      {
        id: 4,
        username: "janghyun4",
        subject: "First Title",
        content: "hi, my name i janghyun4.",
        order_number: 1,
      },
      {
        id: 5,
        username: "janghyun5",
        subject: "Second Title",
        content: "hi, my name i janghyun5.",
        order_number: 2,
      },
      {
        id: 6,
        username: "janghyun6",
        subject: "Third Title",
        content: "hi, my name i janghyun6.",
        order_number: 3,
      },
    ],
  },
  {
    list_id: 3,
    list_title: "Done",
    card_contents: [
      {
        id: 7,
        username: "janghyun7",
        subject: "First Title",
        content: "hi, my name i janghyun7.",
        order_number: 1,
      },
      {
        id: 8,
        username: "janghyun8",
        subject: "Second Title",
        content: "hi, my name i janghyun8.",
        order_number: 2,
      },
      {
        id: 9,
        username: "janghyun9",
        subject: "Third Title",
        content: "hi, my name i janghyun9.",
        order_number: 3,
      },
    ],
  },
];

export default DEFAULT_DATA;
