export class Photo {

  id: number;
  location: String;
  imageUrl: String;
  dateTaken: String;
  camera: String;
  description: String;


  constructor( id: number = 0,
    location: String = '',
    imageUrl: String = '',
    dateTaken: String = '',
    camera: String = '',
    description: String = ''){

      this.id = id;
      this.location = location;
      this.imageUrl = imageUrl;
      this.dateTaken = dateTaken;
      this.camera = camera;
      this.description = description;
    }
}
