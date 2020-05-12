import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {TesterService} from '../../tester.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss'],
})
export class Tab11Page implements OnInit, OnDestroy {
  public tester: boolean;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private testerService: TesterService) { }

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

  public toggleTester(): void {
    this.testerService.toggleTester();
  }

  public changeDetection(): boolean {
    console.log('cd');
    return true;
  }

}
