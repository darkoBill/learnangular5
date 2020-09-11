import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  styleUrls: []
})
export class ArtistItemsComponent implements OnInit {
  @Input() artist: string;
  constructor() {}

  ngOnInit() {
  }

}
