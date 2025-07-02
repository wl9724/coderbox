import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-timestamp-tool',
  standalone: true,
  imports: [FormsModule, NzInputModule],
  templateUrl: './timestamp-tool.component.html',
  styleUrls: ['./timestamp-tool.component.scss']

})
export class TimestampToolComponent {
  timestamp = '';
  dateString = '';
  unit: 'ms' | 's' = 'ms';

  updateDateFromTimestamp() {
    const ts = parseInt(this.timestamp, 10);
    if (!isNaN(ts)) {
      const date = new Date(this.unit === 'ms' ? ts : ts * 1000);
      this.dateString = date.toLocaleString();
    } else {
      this.dateString = '';
    }
  }

  updateTimestampFromDate() {
    const date = new Date(this.dateString);
    if (!isNaN(date.getTime())) {
      this.timestamp = this.unit === 'ms'
        ? date.getTime().toString()
        : Math.floor(date.getTime() / 1000).toString();
    } else {
      this.timestamp = '';
    }
  }
}
