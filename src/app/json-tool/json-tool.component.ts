import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    selector: 'app-json-tool',
    standalone: true,
    imports: [FormsModule, NzInputModule],
    templateUrl: './json-tool.component.html',
    styleUrls: ['./json-tool.component.scss']
})
export class JsonToolComponent {
    inputJson: string = '';
    outputJson: string = '';
    errorMessage: string = '';

    formatJson() {
        try {
            const parsed = JSON.parse(this.inputJson);
            this.outputJson = JSON.stringify(parsed, null, 2);
            this.errorMessage = '';
        } catch (err) {
            this.outputJson = '';
            this.errorMessage = '无效的 JSON 格式';
        }
    }

    clear() {
        this.inputJson = '';
        this.outputJson = '';
        this.errorMessage = '';
    }
}
