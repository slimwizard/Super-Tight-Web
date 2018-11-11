import { Component, OnInit } from '@angular/core'
import { ArtService } from '../../services/art.service'
import * as $ from 'jquery'
import { UserCommentService } from '../../services/user-comment.service'
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public artService: ArtService, public commentService: UserCommentService) { 

    console.log(this.commentService.allComments)
  }

  name: string
  comment: string
  mood: string
  maxCommentId: string = "0"
  inputError: boolean



  changeImage(piece: any) {
    if (piece.src === "../assets/images/art/copywrite.jpg") {
      piece.src = "../assets/images/art/moonwrite.jpg"
      $("body").removeClass("lightBackground")
      $("body").addClass("darkBackground")
      $(".comment-box").css("color", "black")
    } else if (piece.src === "../assets/images/art/moonwrite.jpg") {
      piece.src = "../assets/images/art/copywrite.jpg"
      $("body").removeClass("darkBackground")
      $("body").addClass("lightBackground")
      $(".comment-box").css("color", "black")
    }    
  }

  saveNewComment = () => {
    if (this.name == null || this.comment == null || this.mood == null) return this.inputError = true
    this.commentService.saveComment(this.name, this.comment, this.mood)
    this.inputError = false
    this.clearCommentInput()
  }
  
  clearCommentInput = () => {
    this.name = null;
    this.comment = null
    this.mood = null
  }

  getComments = () => {

    return this.commentService.allComments
  }


  

}
