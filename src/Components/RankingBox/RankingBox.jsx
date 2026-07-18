import styles from './RankingBox.module.css'
import rankImage from "../../assets/semester2-scores.png"

function RankingBox(){
return(
    <div className={styles.graph} id="_graph">
      <img src={rankImage} className={styles.graphImg} alt="" />
    </div>
)
}
export default RankingBox