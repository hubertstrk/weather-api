import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sunrise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sunrise.component.html',
  styleUrl: './sunrise.component.scss',
})
export class SunriseComponent {
  @Input() sunrise: number | null = null;
  @Input() sunset: number | null = null;

  convertUnixTimeToLocalTime(unixTime: number | null): string {
    if (unixTime === null) return '';

    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
