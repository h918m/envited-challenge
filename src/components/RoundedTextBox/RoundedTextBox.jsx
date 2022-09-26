import styles from './RoundedTextBox.module.scss'

function RoundedTextBox(props) {
  return (
    <>
      <input
        name={props.name}
        type={props.type}
        className={`${styles.roundedTextBox} ${props.className}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default RoundedTextBox;