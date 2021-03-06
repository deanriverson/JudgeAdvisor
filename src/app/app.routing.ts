import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {TeamImportComponent} from "./teams/team-import/team-import.component";
import {TeamListComponent} from "./teams/team-list/team-list.component";
import {JudgeListComponent} from "./judges/judge-list/judge-list.component";
import {HomeComponent} from "./home/home.component";
import {JudgeImportComponent} from "./judges/judge-import/judge-import.component";
import {TournamentInfoComponent} from "./tournament/tournament-info/tournament-info.component";
import {DeliberationComponent} from "./deliberation/deliberation/deliberation.component";
import {ScoresComponent} from "./deliberation/scores/scores.component";

const routes: Routes = [
  { path: 'tournament',   component: TournamentInfoComponent },

  { path: 'deliberation',        component: DeliberationComponent },
  { path: 'deliberation/scores', component: ScoresComponent },

  { path: 'team',         component: TeamListComponent },
  { path: 'team/import',  component: TeamImportComponent },

  { path: 'judge',        component: JudgeListComponent },
  { path: 'judge/import', component: JudgeImportComponent },

  { path: '',   component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  TournamentInfoComponent,

  DeliberationComponent,
  ScoresComponent,

  TeamListComponent,
  TeamImportComponent,

  JudgeListComponent,
  JudgeImportComponent
];
