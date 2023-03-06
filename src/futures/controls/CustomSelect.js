import Select from 'react-select';

import { useFilter } from './useFilter';

export const CustomSelect = () => {
  const [filter, options, handleSelect] = useFilter();
  const styles = {
    control: (provided) => ({
      ...provided,
      width: '135px',
      minHeight: '24px',
      height: '24px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#F2F2F2',
      border: 'none',
    }),
    valueContainer: (provided) => ({
      ...provided,
      textAlign: 'center',
      fontFamily: 'Source Sans Pro',
      fontSize: '16px',
      lineHeight: '20px',
      display: 'block',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '24px',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      width: '26px',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      paddingLeft: '20px',
      border: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: '4px 4px 8px rgba(1, 28, 64, 0.2)',
      borderRadius: '8px',
      backgroundColor: '#F2F2F2'
    }),
    container: (provided) => ({
      ...provided,
      boxShadow: '2px 2px 2px rgba(33, 33, 33, 0.1)'
    })
  }

  return (
    <Select 
      options={options}
      value={filter}
      isClearable={false}
      isSearchable={false}
      styles={styles}
      hideSelectedOptions={true}
      onChange={handleSelect} />
  )
}

