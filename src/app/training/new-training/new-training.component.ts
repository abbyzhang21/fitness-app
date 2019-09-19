import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];
  @Output() trainingStart = new EventEmitter();
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }
  onStartTraining(selected: string) {
    console.log(selected)
    this.trainingStart.emit(selected);
  }
}
