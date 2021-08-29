import { AuthService } from './../../../services/auth.service';
import { isAuthenticated } from './../../../auth/state/auth.selector';
import { Observable } from 'rxjs';
import { Component, OnInit,ElementRef, Renderer2 } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeText = 'DARK';
  isAuthenticated: Observable<boolean>;
  constructor(private store: Store<AppState>, private el: ElementRef,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'whitesmoke');
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

  toggleTheme() {
    // INCOMPLETE NEEDS IMPROVEMENTS
    if (this.themeText === 'DARK') {
      this.themeText = 'LIGHT';
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'lightblue');
      // this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'color', 'white');

      // this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    } else {
      this.themeText = 'DARK';
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'whitesmoke');

    }
  }
}
