import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { LoaderService } from "../../components/loader/loader.service";
import { FormUtils } from "../../shared/form.utils";
import { Request } from '../shared/request.model';
import { RequestService } from "../shared/request.service";

@Component({
  selector: 'request-detail',
  templateUrl: './request-detail.component.html',
  styles: [".form-control-feedback{ margin-right: 25px }"]
})

export class RequestDetailComponent implements OnInit{
  public form: FormGroup;
  public request: Request;
  public requestTypeOptions: Array<any>;
  public requestDocumentOptions: Array<any>;
  public requestStatusOptions: Array<any>;
  public formUtils: FormUtils;
  public msgText = '';

  public constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService
  ){
    this.requestTypeOptions = [
      { value: 'in', text: "Entrada de Produtos"},
      { value: 'out', text: "Saída de Produtos"},
      { value: 'devolution', text: "Devolução"}
    ];

    this.requestDocumentOptions = [
      { value: 'NF', text: "Nota Fiscal"},
      { value: 'D1', text: "D1"}
    ];

    this.requestStatusOptions = [
      { value: true, text: "Concluída"},
      { value: false, text: "Pendente"}
    ];

    this.form = this.formBuilder.group({
      date: [null],
      request_type: [null, Validators.required],
      description: [null,  Validators.required],
      document_type: [null],
      document_code: [null],
      status: [null]
    })

    this.formUtils = new FormUtils(this.form);
  }

  ngOnInit(){
    this.request = new Request(null, '', '', '');
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.requestService.getById(+params.get('id')))
    )
    .subscribe(
      request => {
        this.setRequest(request),
        this.loaderService.hide()
      },
      error => alert("Ocorreu um error no servidor, tente mais tarde."),
      () => this.loaderService.hide()
    )
  }

  public ngAfterViewInit(){
    this.loaderService.show()
  }

  public setRequest(request: Request): void {
    this.request = request;
    this.form.patchValue(request);
  }

  public goBack(){
    this.location.back();
  }

  public updateRequest(){
    this.loaderService.show()
    this.request.document_type = this.form.get('document_type').value;
    this.request.document_code = this.form.get('document_code').value;
    this.request.date = this.form.get('date').value;
    this.request.request_type = this.form.get('request_type').value;
    this.request.description = this.form.get('description').value;
    this.request.status = this.form.get('status').value;

    this.requestService.update(this.request)
    .subscribe(
      () => {
        this.msgText = "Requisição atualizada com sucesso!",
        this.loaderService.hide()
      },
      () => alert("Ocorreu um erro no servidor, tente mais tarde!"),
      () => setTimeout(function(){history.back();}, 3000)
    )
  }
}
