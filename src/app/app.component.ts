import { Component, ElementRef, ViewChild } from '@angular/core';

enum Orientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollPositions: number[] = [];
  items = [
    {
      title: 'Top Rated',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Square
    },
    {
      title: 'Latest Movies',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Landscape
    },
    {
      title: 'Thriller Movies',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Portrait
    },
    {
      title: 'Romantic Movies',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Landscape
    },
    {
      title: 'Popular Shows',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Portrait
    },
    {
      title: 'Season Special',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Square
    },
    {
      title: 'Popular Shows',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Portrait
    },
    {
      title: 'Season Special',
      movies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      orientation: Orientation.Portrait
    }
  ]

  constructor() {
    this.scrollPositions = new Array(this.items.length).fill(0);
  }

  next(i: number) {
    const itemWidth = this.items[i].orientation === Orientation.Landscape ? 288 : 192;
    const x = this.items[i].movies.length;
    if (this.scrollPositions[i] > ((x - 3) * -itemWidth)) this.scrollPositions[i] = this.scrollPositions[i] - itemWidth;
  }

  prev(i: number) {
    const itemWidth = this.items[i].orientation === Orientation.Landscape ? 288 : 192;
    if (this.scrollPositions[i] < 0) this.scrollPositions[i] = this.scrollPositions[i] + itemWidth;
  }
}
