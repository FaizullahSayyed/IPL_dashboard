import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  return (
    <div className="match-card">
      <div className="match-card-logo-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
      </div>
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-team-result">{result}</p>
      <p className={matchStatus === 'Won' ? 'win-styles' : 'lose-styles'}>
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
