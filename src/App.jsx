import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBedPulse,
  faPerson,
  faDatabase,
  faFilter,
  faHouse,
  faFileLines,
  faNewspaper,
  faMicroscope,
  faMoneyBillTransfer,
  faPeopleGroup,
  faChartBar,
  faFlask,
  faBurger,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div>
        {/* Navbar Starts here */}
        <nav className="w-full h-14 bg-sky-950 flex justify-between items-center ">
          <div></div>
          <div className="l-20 w-50">
            <select
              className="rounded-l-full h-10 bg-gray-100 text-sm text-gray-700"
              name=""
              id=""
            >
              <option className="text-xs" value="">
                Patients
              </option>
            </select>
            <input
              className="rounded-r-full h-10 w-64 text-sm"
              type="text"
              placeholder="   Search"
            />
            <button className="h-10 w-20 bg-green-700 rounded-full text-xs text-white ml-1">
              + Add New
            </button>
          </div>
          <div className="flex justify-end">
            <button className="rounded-full m-5">
              <FontAwesomeIcon
                className="rounded-full h-10 bg-sky-800"
                icon={faBell}
              />
            </button>
            <button className="rounded-full m-5">
              <img className="rounded-full h-10" src="src\image.png" alt="" />
            </button>
          </div>
        </nav>
        {/* navbar ends here */}

        {/* Dashboard and Processes  starts here*/}
        <div className="flex">
          <div className="h-[90vh] w-1/12 ">
            <p className="text-xs text-gray-700 ml-1 mt-1 mb-1 font-semibold">
              Dashboard
            </p>
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 rounded-t-lg mb-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faPerson} />
              <p className="text-xs">Patients</p>
            </button>
            <br />
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 mt-[1px] mb-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faDatabase} />
              <p className="text-xs">HR</p>
            </button>
            <br />
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 mt-[1px] mb-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faFilter} />
              <p className="text-xs">Labs</p>
            </button>
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 rounded-b-lg mt-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faHouse} />
              <p className="text-xs">Pharma</p>
            </button>
            <br />
            <p className="text-xs text-gray-700 mt-1 mb-1 ml-1 font-semibold">
              Processes
            </p>

            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 rounded-t-lg mt-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faNewspaper} />
              <p className="text-xs">Registration</p>
            </button>
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 mt-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faFileLines} />
              <p className="text-xs">Consultation</p>
            </button>
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 mt-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faMicroscope} />
              <p className="text-xs">Tests & Report</p>
            </button>
            <button className="h-12 w-20 bg-gray-200 hover:bg-green-600 rounded-b-lg mt-[1px] ml-2">
              <FontAwesomeIcon className="h-5 w-5" icon={faMoneyBillTransfer} />
              <p className="text-xs">Billing</p>
            </button>
          </div>
          {/* Dashboard and Processes ends here */}
          <br />
          {/* COnsultancy starts */}
          <div className=" bg-slate-200 gap-1 w-[92vw]">
            <div className="h-10 w-[88vw] text-green-600 mt-3 content-center rounded-md bg-white ml-3">
              <FontAwesomeIcon
                className="h-5 w-5 mr-1 ml-1"
                icon={faPeopleGroup}
              />
              Consultants
            </div>
            {/* Consultancy Ends */}

            {/* Filters Starts */}
            <div className="h-10 w-[88vw] content-center mt-3 bg-white rounded-md ml-3">
              <button className="h-10 w-16 bg-green-700 rounded-md text-white mr-4">
                Filters
              </button>
              <select
                className="rounded-full h-8 w-[180px] bg-gray-100 text-sm text-gray-700 mr-4"
                name=""
                id=""
              >
                <option className="text-xs" value="">
                  Select Range
                </option>
              </select>

              <label className="text-sm text-gray-700 mr-4">
                <input type="radio" name="rishi" id="" /> Summary
              </label>
              <label className="text-sm text-gray-700 mr-4">
                <input type="radio" name="rishi" id="" /> Branch Wise
              </label>
            </div>
            {/* Filters Ends */}

            <div className="h-10 w-[90vw] place-content-center  flex justify-around gap-1">
              <div className="h-[100px] w-[250px]  content-center p-1 mt-3 bg-white rounded-lg border-l-4 border-orange-500">
                <p className="text-xs font-semibold text-green-600">
                  Consultant count
                </p>
                <span className="float-right rounded-full bg-orange-200">
                  <FontAwesomeIcon
                    className="h-5 w-5 mr-1 ml-1"
                    icon={faPeopleGroup}
                  />
                </span>
                <p className="font-bold">90/900</p>
                <p className="text-xs text-slate-500">Today/Period</p>
              </div>
              <div className="h-[100px] w-[250px]  content-center p-1 mt-3 bg-white rounded-lg border-l-4 border-gray-500">
                <p className="text-xs font-semibold text-green-600">
                  Consultations
                </p>
                <span className="float-right rounded-full bg-gray-200">
                  <FontAwesomeIcon
                    className="h-5 w-5 mr-1 ml-1"
                    icon={faChartBar}
                  />
                </span>
                <p className="font-bold">90/900</p>
                <p className="text-xs text-slate-500">Today/Period</p>
              </div>
              <div className="h-[100px] w-[250px]  content-center p-1 mt-3 bg-white rounded-lg border-l-4 border-green-500">
                <p className="text-xs font-semibold text-green-600">Labs</p>
                <span className="float-right rounded-full bg-green-200">
                  <FontAwesomeIcon
                    className="h-5 w-5 mr-1 ml-1"
                    icon={faFlask}
                  />
                </span>
                <p className="font-bold">90/900</p>
                <p className="text-xs text-slate-500">Today/Period</p>
              </div>
              <div className="h-[100px] w-[250px]  content-center p-1 mt-3 bg-white rounded-lg border-l-4 border-purple-500">
                <p className="text-xs font-semibold text-green-600">
                  Diet Plan
                </p>
                <span className="float-right rounded-full bg-purple-200">
                  <FontAwesomeIcon
                    className="h-5 w-5 mr-1 ml-1"
                    icon={faBurger}
                  />
                </span>
                <p className="font-bold">90/900</p>
                <p className="text-xs text-slate-500">Today/Period</p>
              </div>
            </div>

            {/* Table starts here */}
            <div className="h-10 w-[88vw] rounded-lg ">
              <div className="table-container p-4 border border-black bg-white mt-20 ml-3 w-[88vw] rounded-lg">
                <caption className="mt-10 mb-4 ml-8 bg-white">
                  Consultants
                </caption>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="border border-black py-2 text-center">
                        NAME
                      </th>
                      <th className="border border-black py-2 text-center">
                        PATIENT COUNT
                      </th>
                      <th className="border border-black py-2 text-center">
                        LABS
                      </th>
                      <th className="border border-black py-2 text-center">
                        DIET PLAN
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Rishi
                      </td>
                      <td className="border border-black py-2 text-center">
                        12
                      </td>
                      <td className="border border-black py-2 text-center">
                        3
                      </td>
                      <td className="border border-black py-2 text-center">
                        4
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Anwesh
                      </td>
                      <td className="border border-black py-2 text-center">
                        5
                      </td>
                      <td className="border border-black py-2 text-center">
                        6
                      </td>
                      <td className="border border-black py-2 text-center">
                        7
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Mathew
                      </td>
                      <td className="border border-black py-2 text-center">
                        12
                      </td>
                      <td className="border border-black py-2 text-center">
                        6
                      </td>
                      <td className="border border-black py-2 text-center">
                        5
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Robert
                      </td>
                      <td className="border border-black py-2 text-center">
                        15
                      </td>
                      <td className="border border-black py-2 text-center">
                        2
                      </td>
                      <td className="border border-black py-2 text-center">
                        7
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Chris
                      </td>
                      <td className="border border-black py-2 text-center">
                        9
                      </td>
                      <td className="border border-black py-2 text-center">
                        5
                      </td>
                      <td className="border border-black py-2 text-center">
                        4
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Julie
                      </td>
                      <td className="border border-black py-2 text-center">
                        10
                      </td>
                      <td className="border border-black py-2 text-center">
                        3
                      </td>
                      <td className="border border-black py-2 text-center">
                        3
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Natasha
                      </td>
                      <td className="border border-black py-2 text-center">
                        9
                      </td>
                      <td className="border border-black py-2 text-center">
                        6
                      </td>
                      <td className="border border-black py-2 text-center">
                        7
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Selena
                      </td>
                      <td className="border border-black py-2 text-center">
                        17
                      </td>
                      <td className="border border-black py-2 text-center">
                        6
                      </td>
                      <td className="border border-black py-2 text-center">
                        2
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Albert
                      </td>
                      <td className="border border-black py-2 text-center">
                        15
                      </td>
                      <td className="border border-black py-2 text-center">
                        5
                      </td>
                      <td className="border border-black py-2 text-center">
                        9
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black py-2 text-center">
                        Josh Carry
                      </td>
                      <td className="border border-black py-2 text-center">
                        7
                      </td>
                      <td className="border border-black py-2 text-center">
                        6
                      </td>
                      <td className="border border-black py-2 text-center">
                        7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
