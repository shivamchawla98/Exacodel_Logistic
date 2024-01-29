import country_list from "@/components/data/country";
import GET_PORTS_NAME_USING_STATE from "@/graphql/query/getPortsNameUsingState";
import GET_PORTS_USING_COUNTRY from "@/graphql/query/getPortsUsingCountry";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
const removeDuplicates = (arr: any[]) => {
  return arr?.filter((value, index, self) => self.indexOf(value) === index);
};

function SubSearchBar({
  country,
  state,
  name,
  setCountry,
  setState,
  setName,
  setShowbar,
}: any) {
  const [SuggestionsCountry, { data, error, loading }] = useLazyQuery(
    GET_PORTS_USING_COUNTRY
  );
  const [SuggestionsState, { error: errorState, loading: loadingState }] =
    useLazyQuery(GET_PORTS_NAME_USING_STATE);
  const [states, setOptionsState] = useState(data);
  const [names, setOptionsName] = useState(data);
  const [stateActivated, setStateActivated] = useState(false);
  const [nameActivated, setNameActivated] = useState(false);
  const [countrySuggestion, setCountrySuggetion] = useState<any[]>([]);
  const [stateSuggestion, setStateSuggetion] = useState<any[]>([]);
  const [nameSuggestion, setNameSuggetion] = useState<any[]>([]);

  const fetchAndSetStates = async (value: string) => {
    let { data } = await SuggestionsCountry({
      variables: {
        input: value,
      },
    });
    let allAvailableStates = removeDuplicates(
      data?.SuggestionsCountry?.map((ports: any) => ports.State)
    );
    setOptionsState(allAvailableStates);
    console.log("data : ", data);
  };

  const fetchAndSetNames = async (value: string) => {
    let { data } = await SuggestionsState({
      variables: {
        input: value,
      },
    });
    let allAvailableNames = removeDuplicates(
      data?.SuggestionsState?.map((ports: any) => ports.name)
    );
    setOptionsName(allAvailableNames);
    console.log("data : ", data);
  };
  return (
    <div className="flex-center flex-col py-4 px-4 rounded-lg bg-gray-200 shadow-lg">
      <div className="">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Country
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => {
            let inputValue = e.currentTarget.value;
            setCountry(inputValue);
            let filtered = country_list.filter((item: any) =>
              item.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setCountrySuggetion(filtered.slice(0, 3));
          }}
          className=" border-2 border-orange-500  text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-500 block  w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        <div className="z-10">
          {countrySuggestion.map((item) => (
            <div
              key={item}
              className="cursor-pointer py-2 px-3 hover:bg-slate-100 z-20"
            >
              <p
                id={item}
                onClick={(e: any) => {
                  let value = e.target.id;
                  console.log("value : >>>", value);

                  fetchAndSetStates(value);
                  setCountry(value);
                  console.log(value);
                  setStateActivated(true);
                  setCountrySuggetion([]);
                }}
                className="text-sm font-medium text-gray-600"
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          State
        </label>

        <input
          type="text"
          id="state"
          value={state}
          disabled={!stateActivated}
          onChange={(e) => {
            let value = e.target.value;
            setState(value);
            let filtered = states.filter((item: any) =>
              item.toLowerCase().startsWith(value.toLowerCase())
            );
            setStateSuggetion(filtered);
          }}
          className=" border-2 border-orange-500  text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-500 block  w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        {stateSuggestion?.map((state: any) => (
          <div
            key={state}
            className="cursor-pointer py-2 px-3 hover:bg-slate-100 z-20"
          >
            <p
              id={state}
              onClick={(e: any) => {
                let value = e.target.id;
                console.log("value : >>>", value);

                fetchAndSetNames(value);
                setState(value);
                console.log(value);
                setNameActivated(true);
                setStateSuggetion([]);
              }}
              className="text-sm font-medium text-gray-600"
            >
              {state}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <label
          htmlFor="Name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          disabled={!nameActivated}
          value={name}
          onChange={(e) => {
            let value = e.target.value;
            setName(value);
            let filtered = names.filter((item: any) =>
              item.toLowerCase().startsWith(value.toLowerCase())
            );
            setNameSuggetion(filtered);
          }}
          className=" border-2 border-orange-500  text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-500 block  w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />

        {nameSuggestion?.map((name: any) => (
          <div
            key={name}
            className="cursor-pointer py-2 px-3 hover:bg-slate-100 z-20"
          >
            <p
              id={name}
              onClick={(e: any) => {
                let value = e.target.id;
                console.log("value : >>>", value);
                setName(value);
                setTimeout(() => {
                  setShowbar(false);
                }, 1000);
              }}
              className="text-sm font-medium text-gray-600"
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubSearchBar;
