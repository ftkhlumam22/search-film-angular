import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetFilmService } from 'src/app/services/get-film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: GetFilmService) { }

  pageId = '';

  detailMovie$ : any;
  isLoading = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pageId = params['id']
   })
   this.getDataMovies(this.pageId)
  }


  getDataMovies(id: string){
    this.isLoading = true;
    this.service.getDetailMovie(id).subscribe(data => {
      this.detailMovie$ = data;
      this.isLoading = false;;
    })
  }


}
