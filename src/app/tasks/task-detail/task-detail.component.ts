import { Location } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import { switchMap } from "rxjs/operators";
import { FormUtils } from "../../shared/form.utils";
import { Task } from '../shared/task.model';
import { TaskService } from "../shared/task.service";
window['datetimepicker'] = window['datetimepicker'] = datetimepicker;


@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styles: [".form-control-feedback{ margin-right: 25px }"]
})

export class TaskDetailComponent implements OnInit, AfterViewInit{
  public form: FormGroup;
  public task: Task;
  public taskDoneOptions: Array<any>;
  public formUtils: FormUtils;


  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.taskDoneOptions = [
      { value: false, text: "Pendente"},
      { value: false, text: "Feita"}
    ];

    this.form = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null]
    })

    this.formUtils = new FormUtils(this.form);
  }


  public ngOnInit(){
    this.task = new Task(null, null);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.taskService.getById(+params.get('id')))
    )
    .subscribe(
      task => this.setTask(task),
      error => alert("Ocorreu um error no servidor, tente mais tarde.")
    )
  }


  public setTask(task: Task): void {
    this.task = task;
    this.form.patchValue(task);
  }


  public ngAfterViewInit(){
     $("#deadline").datetimepicker({
       sideBySide: false,
       locale: 'pt-br'
     }).on('dp.change', () =>  this.form.get('deadline').setValue($("#deadline").val()));
  }


  public goBack(){
    this.location.back();
  }


  public updateTask(){
    this.task.title = this.form.get('title').value;
    this.task.deadline = this.form.get('deadline').value;
    this.task.done = this.form.get('done').value;
    this.task.description = this.form.get('description').value;

    this.taskService.update(this.task)
    .subscribe(
      () => alert("Tarefa atualizada com sucesso!"),
      () => alert("Ocorreu um erro no servidor, tente mais tarde!"),
      () => this.goBack()
    )
  }
}
