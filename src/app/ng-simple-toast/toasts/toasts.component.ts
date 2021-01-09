import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserToast } from '../models';
import { DEFAULT_MAX, DEFAULT_POSITION } from '../defaults';
import { ToastListService } from '../services/toast-list.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  public toasts: BehaviorSubject<UserToast[]>;
  public defaultPosition = DEFAULT_POSITION;
  public defaultMax = DEFAULT_MAX;

  constructor(private toastListService: ToastListService) {
    this.toasts = this.toastListService.toasts;
  }

  ngOnInit(): void {
  }

  public deleteToast(): void {
    this.toastListService.deleteToast();
  }

}