/**
 * 
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.
  
  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitionsand results, respectively. The
  competitions array has elements in the form of
  [homeTeam, awayTeam], where each team is a string of at most 30
  characters representing the name of the team. The results array
  contains information about the winner of each corresponding competition in the
  competition array. Specifically, results[i] denotes
  the winner of competitions[i], where a 1 in the
  results array means that the home team in the corresponding
  competition won and a 0 means that the away team won.

 */


  //solution one
  //0(n)T | 0(k) Space   k meaning the number of keys for for respective team in this case
  function tournamentWinner(competitions, results) {
    // Write your code here.
      let scores = {"currentBestTeam":{'value': 0 , 'name': ''}}
      let winningTeam = ''
      let homeTeamWon = 1 
    
      for(let i = 0; i < competitions.length; i++){
          let teams = competitions[i]
          const [homeTeam, awayTeam] = teams
      
          if(results[i] == homeTeamWon){
               winningTeam = homeTeam
               scores = updateScore(winningTeam , 3 , scores )
           }else{
              winningTeam = awayTeam
             scores = updateScore(winningTeam , 3 , scores )
           }
  
         if(scores[winningTeam] > scores.currentBestTeam.value){
               scores.currentBestTeam.value = scores[winningTeam]
               scores.currentBestTeam.name = winningTeam    
         }
      } 
     return scores.currentBestTeam.name
  }
  
  function updateScore(winningTeam , point , scores){
       if(scores[winningTeam]){
          scores[winningTeam] += point
        }else{
          scores[winningTeam] = winningTeam
          scores[winningTeam] = point
       }
    return scores
  }