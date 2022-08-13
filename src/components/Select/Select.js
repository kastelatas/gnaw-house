import React, {useState} from 'react';

const optionsList = [
  {
    id: 1,
    name: "Спочатку дорожче",
    value: "expensive",
    sort: 'asc'
  },
  {
    id: 2,
    name: "Спочатку дешевше",
    value: "cheap",
    sort: 'desc'
  }
];

const Select = ({sortByPrice}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(optionsList[0]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (option) => {
    sortByPrice(option.sort)
    setSelectedOption(option);
    setIsOptionsOpen(false);
  };

  return (
    <div className="select">
      <div className="select__wrapper">
        <div className="select__container-wrap">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={isOptionsOpen ? "expanded" : ""}
            onClick={toggleOptions}
          >
            {selectedOption.name}
          </button>
          <ul
            className={`options ${isOptionsOpen ? "show" : ""}`}
            role="listbox"
            aria-activedescendant={selectedOption.name}
            tabIndex={-1}
          >
            {optionsList.map((option, index) => (
              <li
                key={index}
                id={option.id}
                role="option"
                aria-selected={selectedOption == index}
                tabIndex={0}
                onClick={() => {
                  setSelectedThenCloseDropdown(option);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;