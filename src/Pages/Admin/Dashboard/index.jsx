import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { IoMailOutline } from "react-icons/io5";
import { SiAuth0, SiGraphql, SiReact, SiReactrouter } from "react-icons/si";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Dashboard = () => {
  const notes = [
    {
      id: 1,
      title: "GraphQL Must Know",
      icon: <SiGraphql className="w-8 h-8" />,
      totalMembers: 12,
      favorite: true,
      lastUpdated: "March 17, 2020",
      bgColorClass: "bg-pink-600",
    },
    {
      id: 2,
      title: "React Context",
      icon: <SiReact className="w-8 h-8" />,
      favorite: true,
      lastUpdated: "March 17, 2021",
      bgColorClass: "bg-blue-600",
    },
    {
      id: 3,
      title: "React Router Beginner",
      icon: <SiReactrouter className="w-8 h-8" />,
      favorite: true,
      lastUpdated: "March 17, 2021",
      bgColorClass: "bg-red-600",
    },
    {
      id: 4,
      title: "React Auth0",
      icon: <SiAuth0 className="w-8 h-8" />,
      favorite: true,
      lastUpdated: "March 17, 2021",
      bgColorClass: "bg-orange-600",
    },
  ];
  const favoriteNotes = notes.filter((note) => note.favorite);

  const { user } = useAuth0();
  return (
    <>
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:max-w-full lg:mx-auto lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="flex-1 min-w-0">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={user.picture}
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={user.picture}
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      Good morning, {user.name}
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 lowercase">
                      <IoMailOutline
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                      {user.email}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="px-4 mt-6 sm:px-6 lg:px-8">
          <h2 className="text-black text-lg font-medium uppercase tracking-wide">
            Favorite Notes
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
            {favoriteNotes.map((note) => (
              <li
                key={note.id}
                className="relative col-span-1 h-20 flex shadow-sm rounded-md"
              >
                <div
                  className={classNames(
                    note.bgColorClass,
                    "flex-shrink-0 flex items-center justify-center w-24 text-white text-sm font-medium rounded-l-md"
                  )}
                >
                  {note.icon}
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#/"
                      className="text-gray-900 font-medium hover:text-gray-600"
                    >
                      {note.title}
                    </a>
                    <p className="text-gray-500">{note.lastUpdated}</p>
                  </div>
                  <Menu as="div" className="flex-shrink-0 pr-2">
                    <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#/"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#/"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Removed from Favorite
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#/"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Share
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
