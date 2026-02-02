import axios from 'axios'

const instance=axios.create({
  baseURL:"https://api.themoviedb.org/3/",
headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I1YTgzMTBjNDY5NTdlNmZmMDc2MDk3YjZhYmJjYiIsIm5iZiI6MTc2ODc1ODAyOS4xNjEsInN1YiI6IjY5NmQxYjBkMzdhODdiNDIxN2Y5NGNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h-uRG0c1M-8dWj3W20sFMHtpiwR1i1GrR-qNeTFykfA'
  }
})

export default instance;