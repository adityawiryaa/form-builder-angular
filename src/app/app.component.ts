import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { AswJsonPreviewDialog } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { SIMPLE_CONTROLS, CHOICE_CONTROLS, DATE_AND_GPS_CONTROLS, DIGITAL_CONTROLS, OTHERS_CONTROLS } from './form-builder/default-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() uploadData: any[] = [];
  @Input() isShowPreviewButton = true;
  @Input() isShowJsonDataButton = true;
  @Input() isShowPublishButton = true;

  @Output() buttonClick = new EventEmitter<any[]>();
  @Output() previewClick = new EventEmitter<any[]>();
  @Output() publishClick = new EventEmitter<any[]>();

  constructor(
    private notificationService: NotificationService,
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.simpleControls = SIMPLE_CONTROLS;
    this.choiceControls = CHOICE_CONTROLS;
    this.dateAndGpsControls = DATE_AND_GPS_CONTROLS;
    this.digitalControls = DIGITAL_CONTROLS;
    this.othersControls = OTHERS_CONTROLS;
  }
  step = 0;

  title = 'ASW Form Builder Demo';
  simpleControls: any[] = [];
  jsonData: any[] = [];
  dateAndGpsControls: any[] = [];
  choiceControls: any[] = [];
  digitalControls: any[] = [];
  othersControls: any[] = [];
  jsonData1: any[] = [];
  formContainer: any[] = [];

  // Publish Template
  saveJsonData(data: any) {
    //.... 
    console.log(data);
    // do something
  }

  //Preview Template
  // previewTemplate(data: any) {
  //   this.jsonData = data;
  // }

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
        event.currentIndex);
    }
  }

  onSelectionChange(control: any): void {
    console.log(control);
  }

  updatedControl(data: any): void {
    this.formContainer.splice(data.index, 1, data.control);
  }
  duplicateControl(control: any): void {
    const duplicatedControl = JSON.parse(JSON.stringify(control));
    if (duplicatedControl.controlType === 'fileupload') {
      duplicatedControl.value = [];
    } else if (duplicatedControl.controlType !== 'qr-code') {
      duplicatedControl.value = duplicatedControl.controlType === 'slide-toggle' ? false : '';
    }
    this.formContainer.push(duplicatedControl);
  }

  deleteControl(index: any): void {
    this.formContainer.splice(index, 1);
  }

  buttonClicked(type: string): void {
    if (type === 'reset') {
      this.formContainer = ObjectUtils.resetForm(this.formContainer);
    } else {
      const data = ObjectUtils.validateForm(this.formContainer);
      if (!data.isFormValid) {
        this.notificationService.openNotification('Please fill in the following required fields.'
          + ' \n \n' + data.labels.toString(), 'Close');
      } else {
        this.buttonClick.emit(this.formContainer);
      }
    }
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
      data: this.formContainer
    });
    dialogRef.afterClosed();
  }

  publishTemplate(): void {
    this.publishClick.emit(this.formContainer);
  }

}
