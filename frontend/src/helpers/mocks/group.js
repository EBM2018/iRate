import moment from "moment";

export const groupsArray = {
  _id: "4247b1cb-fb3c-49ad-80dd-9a354714e9cf",
  groups: [
    {
      name: "EBM",
      _id: "e22cc200-c140-4977-9b1d-1bcd584f4156",
      classes: [
        {
          _id: "e22cc200-c140-4977-9b1d-1bcd584f4156",
          date: "04/01/2019",
          startTime: "08:00:00",
          endTime: "12:00:00"
        },
        {
          _id: "218542ea-28f6-4bda-9bbe-5a36f201ab35",
          date: moment().format("MM/DD/YYYY"),
          startTime: "00:00:00",
          endTime: "23:00:00"
        },
        {
          _id: "1bd66db2-6d3e-4e9a-b56f-edb7b868a19f",
          date: "03/21/2019",
          startTime: "13:30:00",
          endTime: "15:30:00"
        },
        {
          _id: "35bd2b00-34e4-4ec0-b644-fa7cca1c6a8a",
          date: "02/13/2019",
          startTime: "13:30:00",
          endTime: "17:45:00"
        },
        {
          _id: "4973bd07-b894-452f-93b0-704f5a70fe11",
          date: "02/17/2019",
          startTime: "13:30:00",
          endTime: "17:45:00"
        }
      ]
    },
    {
      name: "Entrepreunariat",
      _id: "5644a242-01c3-4141-9bbe-3fda2f87e9aa",
      classes: [
        {
          _id: "4daedf70-3b88-4d36-85ba-9195073abc50",
          date: "04/01/2019",
          startTime: "08:00:00",
          endTime: "12:00:00"
        },
        {
          _id: "d1ad704c-5539-4ce9-ad31-f3844ccb923f",
          date: "03/10/2019",
          startTime: "08:00:00",
          endTime: "12:00:00"
        },
        {
          _id: "1ca49ce7-960b-49e8-b68a-074764bef1a9",
          date: "03/01/2019",
          startTime: "10:00:00",
          endTime: "12:00:00"
        }
      ]
    }
  ]
};

export const group = {
  name: "EBM",
  _id: "e22cc200-c140-4977-9b1d-1bcd584f4156",
  classes: [
    {
      _id: "e22cc200-c140-4977-9b1d-1bcd584f4156",
      date: "01/04/2019",
      startTime: "08:00:00",
      endTime: "12:00:00"
    },
    {
      _id: "218542ea-28f6-4bda-9bbe-5a36f201ab35",
      date: moment().format("DD/MM/YYYY"),
      startTime: "08:00:00",
      endTime: "12:00:00"
    },
    {
      _id: "1bd66db2-6d3e-4e9a-b56f-edb7b868a19f",
      date: "21/03/2019",
      startTime: "13:30:00",
      endTime: "15:30:00"
    }
  ]
};
