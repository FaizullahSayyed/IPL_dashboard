import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    // id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    // matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-match-details-container">
      <div className="latest-match-team-details-container">
        <div className="latest-match-details-info-container">
          <div className="name-logo-container">
            <div className="team-info">
              <p className="latest-match-details-info-container-heading">
                {competingTeam}
              </p>
              <p className="latest-match-details-date">{date}</p>
              <p className="stadium">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <div className="logo-container">
              <img
                src={competingTeamLogo}
                alt={`latest match ${competingTeam}`}
                className="team-logo"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="innings-container">
            <h1 className="innings-heading">First Innings</h1>
            <p className="innings-result">{firstInnings}</p>
            <h1 className="innings-heading">Second Innings</h1>
            <p className="innings-result">{secondInnings}</p>
            <h1 className="innings-heading">Man of the Match</h1>
            <p className="innings-result">{manOfTheMatch}</p>
            <h1 className="innings-heading">Umpires</h1>
            <p className="innings-result">{umpires}</p>
          </div>
        </div>
      </div>
      {/* <div className="latest-match-match-details-container"></div> */}
    </div>
  )
}

export default LatestMatch
