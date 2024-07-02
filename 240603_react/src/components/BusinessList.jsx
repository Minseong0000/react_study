import BusinessItem from "./BusinessItem";
import styles from "./BusinessList.module.css";

const BusinessList = ({ data }) => {
  return (
    <ul className={styles.businessList}>
      {data.map((data) => (
        <BusinessItem key={data.id} data={data} />
      ))}
    </ul>
  );
};

export default BusinessList;
