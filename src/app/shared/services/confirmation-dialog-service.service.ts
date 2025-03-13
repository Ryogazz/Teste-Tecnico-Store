import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../features/list/components/confirmation-dialog/confirmation-dialog.component';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(private matDialog: MatDialog) {}

  openConfirmationDialog(): Observable<boolean> {
    return this.matDialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(filter((result) => !!result)); 
  }
}