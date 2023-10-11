import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  topScorers = [
    { name: 'Radhika Kame', score: 8 },
    { name: 'Sam Nichal', score: 7 },
    { name: 'Vk Jaisal', score: 10 },
    { name: 'Ranu Phise', score: 11},
    { name: 'Rani Janwajal', score: 30},
    
  ];
}
