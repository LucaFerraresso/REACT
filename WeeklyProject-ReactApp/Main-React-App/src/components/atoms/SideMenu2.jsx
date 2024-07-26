import { Link } from "react-router-dom";

const SideMenu2 = () => {
  return (
    <div className="flex flex-col h-full min-w-[250px] bg-white shadow-lg">
      <div className="px-4 py-6">
        <div className="grid h-12 w-32 place-content-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-600 mb-6">
          Logo
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
            >
              CATEGORIE:
            </Link>
          </li>
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium">API utilizzate</span>
                <span className="shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-2 px-4">
                <li>
                  <Link
                    to="/Products"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    API PRODUCTS
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/pagefour"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Components page
            </Link>
          </li>
          <li>
            <Link
              to="/Favorite"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Favorite
            </Link>
          </li>
          <li>
            <Link
              to="/Shop"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              SHOP
            </Link>
          </li>
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium">Account</span>
                <span className="shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-2 px-4">
                <li>
                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu2;
