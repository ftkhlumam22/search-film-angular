import { Component, OnInit } from '@angular/core';
import { GetFilmService } from 'src/app/services/get-film.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:GetFilmService) { }

  dataMovie$ : any;

  isLoading = 'noLoaded';


  ngOnInit(): void {
    }

  searchedMovie(search : string){
    this.getMovies(search)
  }

  getMovies(title: string){
    this.isLoading = 'loading';
    this.service.getMovie(title).subscribe(result => {
      this.dataMovie$ = result;
      this.isLoading = 'loaded';
    })
  }

}
