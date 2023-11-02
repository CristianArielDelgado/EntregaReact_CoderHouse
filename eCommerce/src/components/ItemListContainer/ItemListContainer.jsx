import styles from './itemListContainer.module.css';

export const ItemListContainer = (props) => {
  return (
    <>
        <div className={styles.container}>
            <h2>{props.message}</h2>    
        </div>
    </>
  )
}
