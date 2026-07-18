import React from 'react'
import { useState } from 'react'
import studentData from '../../data/students.json'
import ResultBox from '../ResultBox/ResultBox'
import styles from './ResultList.module.css'

const ResultList = () => {
  const [searchValue,setSearchValue] = useState("");

  const handleSearchValue = (e) =>{
    setSearchValue(e.target.value)
  }

  const filteredStudents = studentData.filter((student) => {
    const search = searchValue.toLowerCase();

    return(
      student.name.toLowerCase().includes(search)||
      student.rollNo.toString().includes(search)
    )
  })
  



  return (
    <div>
      <div className={styles.searchArea}>
        <div className={styles.searchBox}>
          <input 
            className={styles.searchInput} type="text" 
            placeholder='Search by Name or Roll Number...' 
            onChange={handleSearchValue}
          />
        </div>

      </div>
      {filteredStudents.map((student) => (
        <ResultBox
          key={student.rollNo}
          student={student}
        />
      ))}
    </div>
  )
}

export default ResultList
