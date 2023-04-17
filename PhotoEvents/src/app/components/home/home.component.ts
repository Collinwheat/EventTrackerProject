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
  createForm : boolean = false;
  newPhoto: Photo = new Photo();
  selected: Photo | null = null;
  editPhoto: Photo | null = null;
  updatePhoto: Photo | null = null;

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

  addPhoto(photo: Photo){
    this.photoServ.create(photo).subscribe({
      next: (createdphoto) => {
        this.newPhoto = createdphoto;
        this.reload();
      },
      error:(fail) => {
        console.error('Error creating todo');
        console.error(fail);
      }
    })
    // this.todos = this.todoService.index();
  }

  displayPhoto(photo: Photo){
    this.selected = photo;

  }

  delete(photoId: number){
    this.photoServ.destroy(photoId).subscribe({
      next: (Response) => {
        console.log(Response)
        this.reload();
      },
      error:(fail) => {
        console.error(fail)
      }
    })
  }

  update(photo: Photo, photoId: number){
    console.log(photo);
    this.photoServ.update(photo).subscribe({
      next:(updatedPhoto) => {
        this.editPhoto = null;
        this.reload();
      },
      error:(fail) => {
        console.error(fail);
      }
    });
  }

}
