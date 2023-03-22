/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export const TEXT_ELEMENT_CONTROLS = [
    {
        icon: 'title',
        displayName: 'Header',
        controlType: 'header',
        subtype: 'h1',
        style: 'text-left',
        label: 'Header',
        column: 'col-md-12',
    },
    {
        id: '1',
        icon: 'text_fields',
        displayName: 'Text Field',
        controlType: 'textfield',
        tooltip: 'Enter Text',
        value: '',
        label: 'Text Field',
        style: 'outline',
        column: 'col-md-3',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        id: '1',
        icon: 'short_text',
        displayName: 'Text Area',
        controlType: 'textarea',
        tooltip: 'Enter Text',
        value: '',
        label: 'Text Area',
        style: 'outline',
        column: 'col-md-6',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        id: '1',
        icon: 'numbers',
        displayName: 'Number',
        controlType: 'number',
        tooltip: 'Enter Number',
        value: '',
        label: 'Number',
        style: 'outline',
        column: 'col-md-3',
        isRequired: false,
        isDisabled: false,
        maxlength: 50,
        minlength: 0
    },
    {
        icon: 'calculate',
        displayName: 'Calculation',
        controlType: 'calculation',
        tooltip: 'Enter calculation',
        value: '',
        label: 'Calculation',
        placeholder: 'Field 1 + Field 2 = ',
        style: 'outline',
        column: 'col-md-3',
        operations: []
    },
]

export const MULTI_ELEMENT_CONTROLS = [
    {
        id: '1',
        icon: 'fact_check',
        displayName: 'Select',
        controlType: 'select',
        tooltip: 'Select option',
        label: 'Select',
        style: 'fill',
        column: 'col-md-3',
        value: '',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'checklist',
        displayName: 'Multi Select',
        controlType: 'multi-select',
        tooltip: 'Select options',
        label: 'Multi Select',
        column: 'col-md-3',
        value: '',
        style: 'outline',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'radio_button_checked',
        displayName: 'Radio Button',
        controlType: 'radio',
        tooltip: 'radio',
        label: 'Radio',
        value: 'option-1',
        column: 'col-md-3',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    },
    {
        id: '1',
        icon: 'check_box',
        displayName: 'Checkbox',
        controlType: 'checkbox',
        tooltip: 'checkbox',
        label: 'Checkbox',
        column: 'col-md-3',
        isRequired: false,
        isDisabled: false,
        options: [
            { key: 'option-1', value: 'Option 1', isChecked: false },
            { key: 'option-2', value: 'Option 2', isChecked: false },
            { key: 'option-3', value: 'Option 3', isChecked: false }
        ]
    }
];

export const DATE_ELEMENT_CONTROLS = [
    {
        id: '1',
        icon: 'event',
        displayName: 'Datepicker',
        controlType: 'datepicker',
        value: '',
        tooltip: 'Choose a date',
        label: 'Date Picker',
        style: 'fill',
        column: 'col-md-3',
        isRequired: false,
        isWeekendsDisable: false,
        isDisabled: false,
    },
];


export const OTHER_ELEMENT_CONTROLS = [
];
