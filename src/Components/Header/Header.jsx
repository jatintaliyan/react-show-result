import styles from './Header.module.css'

function Header(){
  return (
    <>
    <div className={styles.header}>
        <h1 className={styles._heading}>MIET</h1>
        <h2 className={styles._heading}>CSE(IOT) STUDENTS</h2>
    </div>

    
    <div className={styles.unheader}>
        <div className={styles._rankbtn}>
                <a href="#_graph" className={styles.seer}>
                    SEE RANKING
                </a>
        </div>
    </div>
    </>
  )
}

export default Header
