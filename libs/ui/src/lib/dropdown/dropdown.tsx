import styles from './dropdown.module.css';

/* eslint-disable-next-line */
export interface DropdownProps {
  id: string;
  name: string;
  data: any;
  onChange: any;
  startValue: string;
}

export function Dropdown(props: DropdownProps) {
  return (
    <>
      <select
        id={props.id || props.name}
        name={props.name || props.id}
        onChange={props.onChange}
        required
      >
        <option>{props.startValue}</option>
        {props.data.map((item: any) => {
          const { label, value } = item;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Dropdown;
