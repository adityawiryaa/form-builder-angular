import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswJsonPreviewDialog } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { MULTI_ELEMENT_CONTROLS, DATE_ELEMENT_CONTROLS, OTHER_ELEMENT_CONTROLS, TEXT_ELEMENT_CONTROLS } from './default-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() isShowJsonDataButton = true;
  @Input() isShowPublishButton = true;

  @Output() buttonClick = new EventEmitter<any[]>();
  @Output() previewClick = new EventEmitter<any[]>();
  @Output() publishClick = new EventEmitter<any[]>();

  textElementControls: any[] = TEXT_ELEMENT_CONTROLS;
  dateElementControls: any[] = DATE_ELEMENT_CONTROLS;
  multiElementControls: any[] = MULTI_ELEMENT_CONTROLS;
  otherElementControls: any[] = OTHER_ELEMENT_CONTROLS;

  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void { }

  step = 0;
  title = 'ASW Form Builder Demo';

  formContainer: any[] = [];

  // Publish Template
  saveJsonData(data: any) {
    //.... 
    console.log(data);
  }

  buttonClickV2(data: any): void {
    console.log(data);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(JSON.parse(JSON.stringify(event.previousContainer.data)),
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onSelectionChange(control: any): void {
    console.log(`onSelectionChange`, control);
  }

  updatedControl(data: any): void {
    console.log(`updatedControl`, data);
    console.log(this.formContainer);
    const allowededStlye = ['fill', 'outline'];
    if (!allowededStlye.includes(data.control?.style)) data.control.style = "outline";
    this.formContainer.splice(data.index, 1, data.control);
  }

  duplicateControl(control: any): void {
    const duplicatedControl = JSON.parse(JSON.stringify(control));
    this.formContainer.push(duplicatedControl);
  }

  deleteControl(index: any): void {
    this.formContainer.splice(index, 1);
  }

  setStep(index: number): void {
    this.step = index;
  }

  previewTemplate(): void {
    this.previewClick.emit(this.formContainer);
  }

  previewJsonData(): void {
    const dialogRef = this.dialog.open(AswJsonPreviewDialog, {
      disableClose: true,
      width: '744px',
      data: this.formContainer,
    });
    dialogRef.afterClosed();
  }

  publishTemplate(): void {
    this.publishClick.emit(this.formContainer);
  }

}
