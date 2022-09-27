import styles from './api-calls.module.css';

/* eslint-disable-next-line */
export interface ApiCallsProps {}

export function ApiCalls(props: ApiCallsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApiCalls!</h1>
    </div>
  );
}

export default ApiCalls;
