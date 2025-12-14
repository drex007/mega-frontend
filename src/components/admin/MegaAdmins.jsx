import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatFullDateTime } from "../../constants";
import {
  activateAndDeactivateUserAction,
  fetchAUserRouteAction,
  getUsersRouteAction,
  getUserTransactionAction,
} from "../../Api/admin/admin.api";
import { AppContext } from "../../ContextAPI";
import { fineuserModal } from "../../config/adminConfig";
import { BsSearch } from "react-icons/bs";
import UserTransactions from "./UserTransactions";

const MegaAdmins = () => {
  const { usersObject } = useSelector((state) => state.admin);
  const [showUserTransactions, setShowUserTransactions] = useState(false);

  const [formdata, setFormdata] = useState({
    user_id: "",
  });



  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { setModalConfig, setCurrentUser, setCurrentUserTransaction } = useContext(AppContext);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleCurrentPageChange = (e) => {
    if (e.target.value && e.target.value > 0) {
      setCurrentPage(e.target.value);
    }
  };

  useEffect(() => {
    dispatch(getUsersRouteAction({ page: currentPage }));
  }, [getUsersRouteAction, formdata, currentPage]);

  return (
    <div className="p-4">
      {showUserTransactions && <UserTransactions  showUserTransactions = {showUserTransactions} setShowUserTransactions = {setShowUserTransactions}/>}
      {!showUserTransactions && (
        <div>
          <div className="flex justify-between">
            <div>Admins</div>
            <div className="border px-4">
              <div className="flex space-x-2 items-center">
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="user_id"
                  placeholder="Enter user or mega id"
                  id=""
                  className="px-4 h-[40px] w-[500px] rounded-sm focus:outline-none font-light text-[12px]"
                />
                <BsSearch
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(fetchAUserRouteAction({ id: formdata.user_id }))
                  }
                />
              </div>
            </div>
          </div>

          <div className="my-10">
            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead
                  class="bg-neutral-secondary-soft border-b border-default text-[12px]"
                  className=""
                >
                  <tr>
                    <th scope="col" class="px-6 py-3 font-medium"></th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Mega ID
                    </th>
                    {/* <th scope="col" class="px-6 py-3 font-medium">
                  Status
                </th> */}
                    <th scope="col" class="px-6 py-3 font-medium">
                      Last online
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[12px]">
                  {usersObject?.users?.map((e, i) => (
                    <tr
                      key={i}
                      class="odd:bg-neutral-primary even:bg-neutral-secondary-soft"
                      className=""
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        {i + 1}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        {e?.email}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        {e?.first_name} {e?.last_name}
                      </th>
                      <td class="px-6 py-4"> {e?.mega_id}</td>
                      <td class="px-6 py-4">
                        {" "}
                        {e?.last_login
                          ? formatFullDateTime(e?.last_login)
                          : "N/A"}
                      </td>
                      <td class="px-6 py-4 flex space-x-1">
                        {!e?.is_active ? (
                          <button
                            className="bg-green-500 p-2 text-[12px] text-white"
                            onClick={() => {
                              dispatch(
                                activateAndDeactivateUserAction({
                                  id: e?.user_id,
                                  choice: "activate",
                                })
                              );
                              dispatch(getUsersRouteAction());
                            }}
                          >
                            Activate
                          </button>
                        ) : (
                          <button
                            className="bg-orange-500 p-2 text-[12px] text-white"
                            onClick={() => {
                              dispatch(
                                activateAndDeactivateUserAction({
                                  id: e?.user_id,
                                  choice: "deactivate",
                                })
                              );
                              dispatch(getUsersRouteAction());
                            }}
                          >
                            Make Admin
                          </button>
                        )}
 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div></div>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex items-center space-x-3">
                {usersObject?.current_page > 1 && (
                  <button
                    className="bg-blue-500 text-white p-2"
                    onClick={() => {
                      if (currentPage >= 2) {
                        setCurrentPage(currentPage - 1);
                      }
                    }}
                  >
                    Prev
                  </button>
                )}
                <p className="text-[12px]">
                  Current Page: {usersObject?.current_page}
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <div className="flex">
                  <input
                    type="number"
                    name=""
                    id=""
                    className="border p-2 text-[10px] w- outline-none"
                    placeholder="Enter page number"
                    onChange={(e) => handleCurrentPageChange(e)}
                  />
                </div>
                {usersObject?.current_page < usersObject?.total_page && (
                  <button
                    className="bg-orange-500 text-white p-2"
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaAdmins;
