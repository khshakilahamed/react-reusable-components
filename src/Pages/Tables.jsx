import { AiFillEdit } from "react-icons/ai";
import Table from "../components/Table";
import Button from "../components/Button";

const Tables = () => {
  const columns = [
    {
      label: "User Name",
      value: "name",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Address",
      value: "address",
    },
    {
      label: "Contact Number",
      value: "mobile",
    },
    {
      label: "Marital Status",
      value: "relationShip",
    },
    {
      label: "Action",
      content: (item) => {
        return (
          <div>
            <Button variant="outlined" className="text-white border-white">
              <AiFillEdit
                className="text-lg"
                onClick={() => alert(item.name)}
              />
            </Button>
          </div>
        );
      },
    },
  ];
  const users = [
    {
      name: "user1",
      email: "user1@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: "Single",
    },
    {
      name: "user2",
      email: "use2r@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: "Married ",
    },
    {
      name: "user3",
      email: "user3@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: " Single",
    },
    {
      name: "user4",
      email: "user4@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: "Married ",
    },
    {
      name: "user5",
      email: "user5@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: " Single",
    },
    {
      name: "user6",
      email: "user6@gmail.com",
      address: "user address",
      mobile: "01xxxxxxxxxx",
      relationShip: "Married",
    },
  ];

  return (
    <div id="tables">
      <h2 className="font-medium text-3xl mb-3">Tables</h2>

      <div className="flex flex-col gap-3">
        <Table columns={columns} data={users} />
      </div>
    </div>
  );
};

export default Tables;
