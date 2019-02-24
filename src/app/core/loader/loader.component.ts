import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public showLoader: boolean;

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loader.isLoaderShown().subscribe((isLoaderShown) => {
      this.showLoader = isLoaderShown;
    });
  }
}
