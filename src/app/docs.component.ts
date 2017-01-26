import { Component } from '@angular/core';
import { Doc } from './doc';
import { OnInit } from '@angular/core';
import { DocService } from './doc.service';

import { Router }   from '@angular/router';



@Component({
  selector : 'my-docs',
  moduleId: module.id,
  templateUrl: 'docs.component.html',
  styleUrls  : [ 'docs.component.css' ],
})

export class DocsComponent  implements OnInit{
  docs : Doc[];
  selectedDoc : Doc;

  constructor(    private router: Router,
                  private docService: DocService) { };


  onSelect(doc : Doc): void {
    this.selectedDoc = doc;
  };

  getDocs(): void {
    this.docService.getDocs().then(docs => this.docs = docs);
  };

  ngOnInit(): void {
    this.getDocs();
  }
  gotoDetail(doc : Doc) : void {
    this.router.navigate(['/detail', doc.id]);
  }

  add(): void {
    this.router.navigate(['/detail', 0]);
  }

  delete(doc: Doc): void {
    this.docService
      .delete(doc.id)
      .then(() => {
        this.docs = this.docs.filter(d => d !== doc);
        if (this.selectedDoc === doc) { this.selectedDoc = null; }
      });
  }
}

