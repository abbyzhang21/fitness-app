import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit {
  private pastExercise : any;
  constructor( private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.pastExercises.subscribe(completed => this.pastExercise = completed);

  }

}
