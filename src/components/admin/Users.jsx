import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatFullDateTime } from "../../constants";
import {
  activateAndDeactivateUserAction,
  fetchAUserRouteAction,
  getUsersRouteAction,
} from "../../Api/admin/admin.api";
import { AppContext } from "../../ContextAPI";
import { fineuserModal } from "../../config/adminConfig";
import { BsSearch } from "react-icons/bs";

const Users = () => {
  const {  usersObject } = useSelector(
    (state) => state.admin
  );
  const [formdata, setFormdata] = useState({
    user_id: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {
    setModalConfig,
    setCurrentUser,
  } = useContext(AppContext);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getUsersRouteAction());
  }, [getUsersRouteAction, formdata]);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>Users</div>
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
                    {e?.last_login ? formatFullDateTime(e?.last_login) : "N/A"}
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
                        Deactivate
                      </button>
                    )}
                    <button
                      className="bg-blue-500 p-2 text-[12px] text-white"
                      onClick={() => {
                        setCurrentUser(e);
                        setModalConfig(fineuserModal);
                      }}
                    >
                      Fine user
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
