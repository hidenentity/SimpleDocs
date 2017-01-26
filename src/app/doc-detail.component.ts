import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Doc } from './doc';
import { DocService } from './doc.service';
import { FormBuilder, Validators } from '@angular/forms';


import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector : 'my-doc-detail',
  template: `
    <div *ngIf ="doc"  class="form-content" [formGroup]="docForm">
      <div class="sd-form-control">
          <label>id: </label>{{id}}
      </div>
      <div>
        <label>Number: 
            <input type="text" [(ngModel)]="doc.number" formControlName="number" class="sd-form-control" placeholder="Enter doc's number.">
        </label>
      </div>
      <div>
        <label>Description: 
            <textarea [(ngModel)]="doc.description" formControlName="description" class="sd-form-control" placeholder="Description here."></textarea>
        </label>
      </div>
    <button (click)="goBack()">Back</button>
    <button (click)="save()">Save</button>
    </div>
  `,
  styleUrls  : ['doc-detail.component.css'],
})
export class DocDetailComponent  implements OnInit {
  @Input()
  doc: Doc;
  @Input()
  id: number;

  public docForm = this.fb.group({
    number:      ["", Validators.required],
    description: ["", Validators.required]
  });

  constructor(
    private docService: DocService,
    private route: ActivatedRoute,
    private location: Location,
    public fb: FormBuilder
  ) {};

  ngOnInit(): void {
    //noinspection TypeScriptValidateTypes
      this.route.params
        .switchMap((params: Params) =>
            {
                this.id = +params['id'];
                return this.docService.getDoc(this.id)
            })
        .subscribe(doc => this.doc = doc);
  };

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.id == 0)
        this.docService.create(this.doc)
            .then(() => this.goBack())
    else
    {
      this.docService.update(this.doc)
        .then(() => this.goBack());

    }
  }
}
