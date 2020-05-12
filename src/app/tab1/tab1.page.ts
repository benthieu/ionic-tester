import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {TesterService} from '../tester.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public tester: boolean;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testerService: TesterService) {}

  ngOnInit(): void {
    console.log('init');
    this.testerService.getTester().pipe(takeUntil(this.destroy$)).pipe(
      takeUntil(this.destroy$)
    ).subscribe((val: boolean) => {
      console.log('sub');
      this.tester = val;
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public navigate(): void {
    this.router.navigate(['tab11'], {relativeTo: this.route});
  }

  public toggleTester(): void {
    this.testerService.toggleTester();
  }
}
