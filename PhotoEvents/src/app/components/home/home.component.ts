import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  photos: Photo[] = [];

  constructor(
    private photoServ: PhotoService
  ){}

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.photoServ.index().subscribe({
      next: (data) => {
        this.photos = data;
      },
      error: (fail) => {
        //todo: Log failures;
      }

    });
  }

}
