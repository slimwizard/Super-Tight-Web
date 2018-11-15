import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';
import { AngularFirestore, QuerySnapshot } from 'angularfire2/firestore';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class UserCommentService {

  commentsMeta: any
  comments: any
  moment: moment.Moment
  constructor(private db: AngularFirestore) { 
    this.comments = []
    db.collection("/UserComments", ref => ref.orderBy("Date", "desc"))
    .valueChanges()
    .subscribe(data => {
      this.comments = data
    })
    
  }

  getLatestDocId() {
    let max: number
    
    return max
  }

  saveComment(name: string, comment: string, mood: string) {
    let commentDateTime = new Date();
    let _commentDateTime: string
    _commentDateTime = commentDateTime.getMonth()+1 + "/"
    + (commentDateTime.getDate())  + "/" 
    + commentDateTime.getFullYear() + " @ "  
    + (Number(commentDateTime.getHours())%12) + ":"  
    + commentDateTime.getMinutes().toPrecision(2)
    let niceDate = new Date()
    let realDate = new Date().toJSON()
    
    this.db.collection("/UserComments").add({
      "Name": name,
      "Comment": comment,
      "Mood": mood,
      "Date": _commentDateTime
    })
  }

  get allComments() {
    
    return this.comments
    //return this.comments ? this.comments.map(item => item.Name = "hello") : this.comments
  }


}
