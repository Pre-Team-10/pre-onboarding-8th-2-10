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
  date: string;
  state: string;
  order_number: number;
}

const DEFAULT_DATA: DefaultData[] = [
  {
    list_id: 1,
    list_title: "To Do",
    card_contents: [
      {
        id: 1,
        username: "janghyun1",
        subject: "First Title",
        content: "hi, my name i janghyun1.",
        date: "20230101",
        state: "done",
        order_number: 1,
      },
      {
        id: 2,
        username: "janghyun2",
        subject: "Second Title",
        content: "hi, my name i janghyun2.",
        date: "20230101",
        state: "done",
        order_number: 2,
      },
      {
        id: 3,
        username: "janghyun3",
        subject: "Third Title",
        content: "hi, my name i janghyun3.",
        date: "20230101",
        state: "done",
        order_number: 3,
      },
    ],
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
        date: "20230101",
        state: "done",
        order_number: 1,
      },
      {
        id: 5,
        username: "janghyun5",
        subject: "Second Title",
        content: "hi, my name i janghyun5.",
        date: "20230101",
        state: "done",
        order_number: 2,
      },
      {
        id: 6,
        username: "janghyun6",
        subject: "Third Title",
        content: "hi, my name i janghyun6.",
        date: "20230101",
        state: "done",
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
        date: "20230101",
        state: "done",
        order_number: 1,
      },
      {
        id: 8,
        username: "janghyun8",
        subject: "Second Title",
        content: "hi, my name i janghyun8.",
        date: "20230101",
        state: "done",
        order_number: 2,
      },
      {
        id: 9,
        username: "janghyun9",
        subject: "Third Title",
        content: "hi, my name i janghyun9.",
        date: "20230101",
        state: "done",
        order_number: 3,
      },
    ],
  },
];

export default DEFAULT_DATA;
