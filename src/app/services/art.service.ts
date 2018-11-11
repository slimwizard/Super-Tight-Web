import { Injectable } from '@angular/core';
import { Art } from '../models/art.model'
 

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  art: Art[] = [

    {title: "Buzzed", src: "../assets/images/art/Buzzed_4.jpg", caption: "Whoaaa cool ;)"},
    {title: "Copywrite", src: "../assets/images/art/copywrite.jpg", caption: "ONE DAY THEY WILL WELCOME ME WITH OPEN ARMS"},
    {title: "Wrong Text", src: "../assets/images/art/phonefinal-2.jpg", caption: "I KNOW CURSING = BAD BUT SOMETIMES I DO IT, ANYWAY"},
    {title: "Youth In Asia", src: "../assets/images/art/doggifdoggif.gif", caption: "INCREDIBLE SPECIES CAN B FOUND HERE"},
    {title: "Static", src: "../assets/images/art/blanktv-2.jpg", caption: "YING YANG AND TV ARE VERRY COOL"},
    {title: "Snake", src: "../assets/images/art/snake2.jpg", caption: "CANT TRUST EVERYONE YA KNOW"},
    {title: "Peace", src: "../assets/images/art/talibanfinal2-2.jpg", caption: "PEACEFUL NIGHT ON EARTH"},
    {title: "Fragile", src: "../assets/images/art/fragilegif.gif", caption: "WE CALL MOVING PICTURES AS MOVIES"},
    {title: "Super Bible", src: "../assets/images/art/superbible.jpg", caption: "A FAVORITE BOOK OF MINE. 'ORIGINS(of Super Tight)'"},
    {title: "Fragile", src: "../assets/images/art/burgerboy.jpg", caption: "MMMM MY FAVORITE FOOD IS DIRTY BURGER"},
    {title: "UFO", src: "../assets/images/art/UFO.jpg", caption: "HOW I INTERPRET THE HUMAN"},
    {title: "Cloud", src: "../assets/images/art/clouds.png", caption: "SOMETIMES I LOOK INTO THE CLOUDS AND TINK ABOUT TINGS"},
    {title: "Friend", src: "../assets/images/art/wow.jpg", caption: "MY FRIEND IS A NICE BOY"},
    {title: "Goons", src: "../assets/images/art/spooky.jpg", caption: "SPOOKY TIMES ARE FUN TIMES TOO"},
    {title: "Bunny", src: "../assets/images/art/Bunnyyy2.jpg", caption: "BUNNIES R MY FAVORITE"},
    {title: "Jazz", src: "../assets/images/art/JazzRabbit3.jpg", caption: "SEE TOLD YA SO"}

  ]

  get allArt(){
    return this.art;
  }



}
