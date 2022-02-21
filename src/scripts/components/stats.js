import { h } from 'preact';

import '../../styles/components/stats.scss';

export default (props) => {

    return (
        <div class="at-stats">
            <div class="at-stats-metric">
                <i class="fa-solid fa-flask"></i> 
                <h2 class="at-stats-metric__label">Total SLP Earned</h2>: <p class="at-stats-metric__value">{props.total_slp_earned}</p>
            </div>
            <div class="at-stats-metric">
                <i class="fa-solid fa-trophy"></i> 
                <h2 class="at-stats-metric__label">Leaderboard Rank</h2>: <p class="at-stats-metric__value">{props.leaderboard_rank}</p>
            </div>
            <div class="at-stats-metric">
                <i class="fa-solid fa-shield"></i> 
                <h2 class="at-stats-metric__label">Elo Rating (MMR) </h2>: <p class="at-stats-metric__value">{props.elo_rating}</p>
            </div>
        </div>
    );
    
};